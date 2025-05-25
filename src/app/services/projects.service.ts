import { computed, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { GitHubService } from './github.service';
import { GitHubRepo } from '../models/github.projects';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  algProjects: Signal<GitHubRepo[]>;
  eduProjects: Signal<GitHubRepo[]>;
  miscProjects: Signal<GitHubRepo[]>;
  private repositoriesSignal: WritableSignal<GitHubRepo[]> = signal<GitHubRepo[]>([]);
  readonly repositories: Signal<GitHubRepo[]> = this.repositoriesSignal.asReadonly();

  constructor(private _githubService: GitHubService) {
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
      const repoIds = repos.map((repo) => repo.name);
      this.getRepoReadme(repoIds);
    });
  }

  private getRepoReadme(repoNames: string[]) {
    const requests: Observable<string>[] = repoNames.map((repoName) => this._githubService.getRepoReadme('mliang1987', repoName));

    forkJoin(requests).subscribe((responses: string[]) => {
      const newRepoList: GitHubRepo[] = [];
      responses.forEach((content, index) => {
        const repo = this.repositoriesSignal()[index];
        if (repo) {
          const updatedRepo = { ...repo, readmeContent: content };
          newRepoList.push(updatedRepo);
        }
      });
      this.repositoriesSignal.set(newRepoList);
    });
  }
}
