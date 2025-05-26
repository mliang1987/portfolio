import { Component, computed, Input, OnChanges, signal, Signal, ViewChild, WritableSignal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProjectsService } from '../../../services/projects.service';
import { GitHubRepo } from '../../../models/github.projects';
import { Divider } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-individual-project',
  imports: [CommonModule, MarkdownModule, CardModule, Divider, FieldsetModule],
  standalone: true,
  templateUrl: './individual-project.component.html',
  styleUrl: './individual-project.component.css'
})
export class IndividualProjectComponent implements OnChanges {
  @Input() projectId: string | null = null;

  repo: Signal<GitHubRepo>;
  collapsed: WritableSignal<boolean> = signal<boolean>(true);

  constructor(private projectsService: ProjectsService) {
    this.repo = computed(() => {
      return this.findInMergedReposSet();
    });
  }

  ngOnChanges(): void {
    this.collapsed.set(true);
    this.repo = computed(() => {
      return this.findInMergedReposSet();
    });
  }

  toggleCollapse(): void {
    this.collapsed.set(!this.collapsed());
  }

  private findInMergedReposSet(): GitHubRepo {
    const repositories = this.projectsService.repositories();
    const openProjects = this.projectsService.openProjects();
    return (
      [...repositories, ...openProjects].find((repo) => repo.id.toString() === this.projectId) || ({} as GitHubRepo)
    );
  }
}
