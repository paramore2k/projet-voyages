import {Component, Input, OnInit} from '@angular/core';
import { VoyagesService } from '../voyages.service';
import {Forfaits} from '../forfaits';

@Component({
  selector: 'app-forfait-urbain',
  templateUrl: './forfait-urbain.component.html',
  styleUrls: ['./forfait-urbain.component.css'],
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
export class ForfaitUrbainComponent implements OnInit {

  @Input() forfaitsUrbain: Forfaits[];
  readonly = true;

  constructor(private voyageService: VoyagesService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
    getForfaits(): void {
    this.voyageService.getForfaits()
      .subscribe(resultat => this.forfaitsUrbain = resultat);
  }
  /* Calcul de la durée du voyage */
  public duree(dateDepart: string, dateRetour: string): number {
    const date1: Date = new Date(dateDepart);
    const date2: Date = new Date(dateRetour);
    return (date2.valueOf() - date1.valueOf()) / (1000 * 3600 * 24);
  }

}
