import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { AccessBarComponent } from './components/access-bar/access-bar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, AccessBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  title = 'Test Change Title';

  constructor(private _primeng: PrimeNG) {}

  ngOnInit() {
    this._primeng.ripple.set(true);
  }
}
