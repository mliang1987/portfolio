/**
 * Copyright (c) 2025 Michael Liang.
 * All rights reserved.
 */

import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CardModule, FieldsetModule, DividerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {}
