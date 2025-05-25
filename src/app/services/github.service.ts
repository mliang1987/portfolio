import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GitHubRepo } from '../models/github.projects';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private baseUrl = 'https://api.github.com/users';
  private reposUrl = 'https://api.github.com/repos';

  constructor(private http: HttpClient) {}

  getPublicRepos(username: string): Observable<GitHubRepo[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${username}/repos`).pipe(
      map((repos) =>
        repos
          .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
          .map((repo) => {
            const allowedKeys = Object.keys(new GitHubRepo());
            const filteredRepo = Object.fromEntries(Object.entries(repo).filter(([key]) => allowedKeys.includes(key)));
            return new GitHubRepo(filteredRepo);
          })
      )
    );
  }

  getRepoReadme(username: string, repoName: string): Observable<string> {
    return this.http.get<{ content: string }>(`${this.reposUrl}/${username}/${repoName}/readme`).pipe(
      map((response) => atob(response.content)) // Decode Base64
    );
  }
}
