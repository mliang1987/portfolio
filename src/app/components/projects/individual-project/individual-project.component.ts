import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-project',
  imports: [],
  templateUrl: './individual-project.component.html',
  styleUrl: './individual-project.component.css'
})
export class IndividualProjectComponent {
  @Input() projectId: string | null = null;
}
