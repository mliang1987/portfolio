import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { Galleria, GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-traveling-salesman',
  standalone: true,
  imports: [FieldsetModule, SplitterModule, CardModule, GalleriaModule],
  templateUrl: './traveling-salesman.component.html',
  styleUrl: './traveling-salesman.component.css'
})
export class TravelingSalesmanComponent {
  readonly images = [
    {
      itemImageSrc: 'assets/images/traveling-salesman/Table_BB.png',
      alt: 'Cutoff-time of 10 minutes.  Briefly, our implemented branch-and-bound algorithm expands the tree in a depth-first fashion (expanding the sub-problem with the smallest lb/k, where lb is the lower-bound and k is the length of the path of the partial solution), which sacrifices pruning ability for smaller frontier sets. ',
      title: 'Figure 5: Branch-and-bound exact algorithm'
    },
    {
      itemImageSrc: 'assets/images/traveling-salesman/Table_MST.png',
      alt: 'Cutoff-time of 1 minute. Briefly, a minimum-spanning tree is generated for the graph. Then, for every node in the tree, applying the 2-approximate algorithm by exploiting the triangle inequality property, generate best tours.',
      title: 'Figure 6: MST-approximation algorithm'
    },
    {
      itemImageSrc: 'assets/images/traveling-salesman/Table_BB.png',
      alt: 'Cutoff-time of 1 minute.  Briefly, generate initial population using all-nearest-neighbors algorithm.  Then, utilize single-point crossover and random swap mutations to generate child populations, with parents weighted by fitness.',
      title: 'Figure 7: Genetic algorithm'
    },
    {
      itemImageSrc: 'assets/images/traveling-salesman/Table_BB.png',
      alt: 'Cutoff-time of 1 minute.  Briefly, generate initial candidate using nearest-neighbors algorithm.  Then, generate neighbor candidates by 2-swap, and probabilistically accept according to cooling schedule.',
      title: 'Figure 8: Simulated annealing algorithm'
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '991px',
      numVisible: 4
    },
    {
      breakpoint: '767px',
      numVisible: 3
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];
}
