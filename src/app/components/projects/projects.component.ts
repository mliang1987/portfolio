import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { IndividualProjectComponent } from './individual-project/individual-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AllProjectsComponent, IndividualProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectId: string | null = null;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('projectId');
    });
  }
}
