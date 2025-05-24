import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('projectId');
    });
  }
}
