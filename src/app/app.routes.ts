/**
 * Copyright (c) 2025 Michael Liang.
 * All rights reserved.
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then((m) => m.ProjectsComponent) },
  {
    path: 'projects/:projectId',
    loadComponent: () => import('./components/projects/projects.component').then((m) => m.ProjectsComponent)
  },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent }
];
