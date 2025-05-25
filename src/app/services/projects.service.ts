import { computed, Injectable, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { GithubService } from './github.service';
import { GitHubRepo } from '../models/github.projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  algProjects: Signal<GitHubRepo[]>;
  eduProjects: Signal<GitHubRepo[]>;
  miscProjects: Signal<GitHubRepo[]>;
  private repositoriesSignal: WritableSignal<GitHubRepo[]> = signal<GitHubRepo[]>([]);
  public readonly repositories: Signal<GitHubRepo[]> = this.repositoriesSignal.asReadonly();

  constructor(private _githubService: GithubService) {
    this.loadRepos();
    this.algProjects = computed(() => this.repositoriesSignal().filter((repo) => repo.topics?.includes('algorithms')));
    this.eduProjects = computed(() => this.repositoriesSignal().filter((repo) => repo.topics?.includes('education')));
    this.miscProjects = computed(() =>
      this.repositoriesSignal().filter((repo) => !repo.topics?.includes('algorithms') && !repo.topics?.includes('education'))
    );
  }

  getRepositoryById(id: string): GitHubRepo | undefined {
    return this.repositories().find((repo) => repo.id === Number(id));
  }

  private loadRepos(): void {
    this._githubService.getPublicRepos('mliang1987').subscribe((repos) => {
      this.repositoriesSignal.set(repos);
    });
  }
}
