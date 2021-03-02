import {Component, Input, OnInit} from '@angular/core';
import { Forfaits } from '../forfaits';
import { VoyagesService } from '../voyages.service';


@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class ForfaitCompletComponent implements OnInit {
  readonly = true;
  @Input() forfaits: Forfaits;


  constructor() { }

  ngOnInit(): void {

  }
  /* Calcul de la durée du voyage */
  public duree(dateDepart: string, dateRetour: string): any {
    const date1: Date = new Date(dateDepart);
    const date2: Date = new Date(dateRetour);
    return (date2.valueOf() - date1.valueOf()) / (1000 * 3600 * 24);
  }

}
