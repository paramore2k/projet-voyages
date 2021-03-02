import {Component, Input, OnInit} from '@angular/core';
import { Forfaits } from '../forfaits';
import { VoyagesService } from '../voyages.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css'],
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
export class MiniForfaitComponent implements OnInit {
  @Input() forfait: Forfaits;
  forfaits: Forfaits[];
  readonly = true;

  constructor(private voyageService: VoyagesService, config: NgbRatingConfig) {
    /* Définie la valeur maximum du nombre d'étoiles dans le formulaire */
    config.max = 5;
    config.readonly = false;
  }

    ngOnInit(): void {
    }

  /* Calcul de la durée du voyage */
  public duree(dateDepart: string, dateRetour: string): any {
    const date1: Date = new Date(dateDepart);
    const date2: Date = new Date(dateRetour);
    return (date2.valueOf() - date1.valueOf()) / (1000 * 3600 * 24);
  }



}
