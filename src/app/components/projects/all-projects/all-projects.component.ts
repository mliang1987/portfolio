import { Component, computed, Signal } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ProjectsService } from '../../../services/projects.service';
import { GitHubRepo } from '../../../models/github.projects';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-projects',
  imports: [PanelModule, CardModule, ButtonModule, RouterModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  projects: Signal<GitHubRepo[]>;

  constructor(private projectsService: ProjectsService) {
    this.projects = computed(() => this.projectsService.repositories());
  }
}
