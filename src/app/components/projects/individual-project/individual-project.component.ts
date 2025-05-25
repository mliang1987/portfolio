import { Component, computed, effect, Input, OnChanges, OnInit, Signal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProjectsService } from '../../../services/projects.service';
import { GitHubRepo } from '../../../models/github.projects';
import { GitHubService } from '../../../services/github.service';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-individual-project',
  imports: [CommonModule, MarkdownModule, CardModule, Divider],
  standalone: true,
  templateUrl: './individual-project.component.html',
  styleUrl: './individual-project.component.css'
})
export class IndividualProjectComponent implements OnInit, OnChanges {
  @Input() projectId: string | null = null;

  repo: Signal<GitHubRepo>;

  constructor(private githubService: GitHubService, private projectsService: ProjectsService) {
    this.repo = computed(
      () =>
        this.projectsService.repositories().find((repo) => repo.id.toString() === this.projectId) || ({} as GitHubRepo)
    );
  }

  ngOnInit(): void {
    this.repo = computed(
      () =>
        this.projectsService.repositories().find((repo) => repo.id.toString() === this.projectId) || ({} as GitHubRepo)
    );
  }

  ngOnChanges(): void {
    this.repo = computed(
      () =>
        this.projectsService.repositories().find((repo) => repo.id.toString() === this.projectId) || ({} as GitHubRepo)
    );
  }
}
