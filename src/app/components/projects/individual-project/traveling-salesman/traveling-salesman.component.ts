import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-traveling-salesman',
  standalone: true,
  imports: [FieldsetModule, SplitterModule, CardModule, ImageModule, CarouselModule],
  templateUrl: './traveling-salesman.component.html',
  styleUrl: './traveling-salesman.component.css'
})
export class TravelingSalesmanComponent {
  readonly responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  readonly tours = [
    {
      name: 'Atlanta'
    },
    {
      name: 'Berlin'
    },
    {
      name: 'Boston'
    },
    {
      name: 'Champaign'
    },
    {
      name: 'Cincinnati'
    },
    {
      name: 'Denver'
    },
    {
      name: 'NYC'
    },
    {
      name: 'Philadelphia'
    },
    {
      name: 'Roanoke'
    },
    {
      name: 'SanFrancisco'
    },
    {
      name: 'Toronto'
    },
    {
      name: 'UKansasState'
    },
    {
      name: 'UMissouri'
    }
  ];
}
