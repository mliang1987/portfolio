import { Component, computed, Signal } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ProjectsService } from '../../../services/projects.service';
import { GitHubRepo } from '../../../models/github.projects';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    ButtonModule,
    RouterModule,
    DividerModule,
    TabsModule,
    ProgressSpinnerModule
  ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  projectGroupsSignal: Signal<GitHubRepo[][]>;
  headerImageUrlsMap: Signal<Map<number, string | null>>;
  loadSignal: Signal<boolean>;

  constructor(private projectsService: ProjectsService) {
    this.loadSignal = computed(() => this.projectsService.loadSignal());
    this.headerImageUrlsMap = computed(() => {
      const headerImageMap = new Map<number, string | null>();
      this.projectsService.repositories().forEach((project) => {
        const headerImage = this.getContentHeader(project.html_url);
        if (headerImage) {
          headerImageMap.set(project.id, headerImage);
        }
      });
      return headerImageMap;
    });
    this.projectGroupsSignal = computed(() => {
      const projectGroups: GitHubRepo[][] = [];
      projectGroups.push(this.projectsService.algProjects());
      projectGroups.push(this.projectsService.openProjects());
      projectGroups.push(this.projectsService.eduProjects());
      projectGroups.push(this.projectsService.miscProjects());
      return projectGroups;
    });
  }

  private getContentHeader(projectUrl: string): string | null {
    const regex = /^https:\/\/github\.com\/mliang1987\/(.+)$/;
    const match = projectUrl.match(regex);
    const matchedString = match
      ? `https://raw.githubusercontent.com/mliang1987/${match[1]}/master/card-header.png`
      : null;
    if (matchedString) {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', matchedString, false);
      xhr.send();
      if (xhr.status !== 200) {
        return null;
      }
    }
    return matchedString;
  }
}
