import { Component, computed, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { RippleModule } from 'primeng/ripple';
import { ProjectsService } from '../../services/projects.service';
import { GitHubRepo } from '../../models/github.projects';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-access-bar',
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    BadgeModule,
    OverlayBadgeModule,
    RippleModule,
    RouterModule
  ],
  standalone: true,
  templateUrl: './access-bar.component.html',
  styleUrl: './access-bar.component.css'
})
export class AccessBarComponent {
  items: Signal<MenuItem[]>;

  private repositories: Signal<GitHubRepo[]>;

  constructor(private projectsService: ProjectsService) {
    this.repositories = computed(() => this.projectsService.repositories());
    this.items = computed(() => this.createMenuItems());
  }

  private createMenuItems(): MenuItem[] {
    const menuItems: MenuItem[] = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/']
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        badge: (this.projectsService.repositories().length + this.projectsService.openProjects().length).toString(),
        items: [
          {
            label: 'All Projects',
            icon: 'pi pi-folder-open',
            routerLink: ['/projects']
          },
          {
            label: 'Machine Learning and Algorithms',
            icon: 'pi pi-github',
            items: this.getProjectsItems(this.projectsService.algProjects()),
            badge: this.projectsService.algProjects().length.toString()
          },
          {
            label: 'Open Source Projects',
            icon: 'pi pi-github',
            items: this.getProjectsItems(this.projectsService.openProjects()),
            badge: this.projectsService.openProjects().length.toString()
          },
          {
            label: 'Projects for Education',
            icon: 'pi pi-github',
            items: this.getProjectsItems(this.projectsService.eduProjects()),
            badge: this.projectsService.eduProjects().length.toString()
          },
          {
            label: 'Others',
            icon: 'pi pi-github',
            items: this.getProjectsItems(this.projectsService.miscProjects()),
            badge: this.projectsService.miscProjects().length.toString()
          }
        ]
      },
      {
        label: 'Résumé',
        icon: 'pi pi-file',
        routerLink: ['/resume']
      },
      {
        label: 'Socials',
        icon: 'pi pi-users',
        items: [
          {
            label: 'LinkedIn',
            icon: 'pi pi-linkedin',
            url: 'https://www.linkedin.com/in/michael-liang-14336a20/'
          },
          {
            label: 'GitHub',
            icon: 'pi pi-github',
            url: 'https://github.com/mliang1987'
          }
        ]
      }
    ];
    return menuItems;
  }

  private getProjectsItems(repos: GitHubRepo[]): MenuItem[] {
    const projects: MenuItem[] = [];
    repos.forEach((repo) => {
      projects.push(this.parseRepositorysIntoMenuItem(repo));
    });
    return projects;
  }

  private parseRepositorysIntoMenuItem(repo: GitHubRepo): MenuItem {
    return {
      label: repo.name,
      icon: 'pi pi-github',
      routerLink: ['/projects', repo.id]
    };
  }
}
