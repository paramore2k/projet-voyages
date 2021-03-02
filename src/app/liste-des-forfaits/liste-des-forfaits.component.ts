import {Component, Input, OnInit} from '@angular/core';
import { Forfaits } from '../forfaits';
import { VoyagesService } from '../voyages.service';
import {RechercheForfaits} from '../recherche-forfaits';

@Component({
  selector: 'app-liste-des-forfaits',
  templateUrl: './liste-des-forfaits.component.html',
  styleUrls: ['./liste-des-forfaits.component.css']
})
export class ListeDesForfaitsComponent implements OnInit {

  /* Input pour la recherche */

  @Input() recherche: RechercheForfaits = {
    nombreEtoiles: null,
    dateDepart: null,
    duree: null,
    villeDeDepart: null
  };
  /* Variable pour les forfaits */

    lesForfaits: Array<Forfaits>;

  constructor(private voyageService: VoyagesService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  /* On récupère les forfaits */
  getForfaits(): void {
    this.voyageService.getForfaits()
      .subscribe(resultat => this.lesForfaits = resultat);
  }

}
