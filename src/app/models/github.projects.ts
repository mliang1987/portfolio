export class GitHubRepo {
  id!: number;
  name!: string;
  full_name!: string;
  description!: string | null;
  html_url!: string;
  language!: string | null;
  stargazers_count!: number;
  forks_count!: number;
  open_issues_count!: number;
  created_at!: string;
  updated_at!: string;
  topics!: string[] | null;

  constructor(init?: Partial<GitHubRepo>) {
    Object.assign(this, init);
  }
}
