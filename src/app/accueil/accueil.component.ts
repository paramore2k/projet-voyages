import {Component, Input, OnInit} from '@angular/core';
import {RechercheComponent} from '../recherche/recherche.component';
import {Forfaits} from '../forfaits';
import {RechercheForfaits} from '../recherche-forfaits';
import {VoyagesService} from '../voyages.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  lesForfaits: Array<Forfaits>;

  constructor(private voyageService: VoyagesService) { }
  @Input() recherche: RechercheForfaits = {
    nombreEtoiles: null,
    dateDepart: null,
    duree: null,
    villeDeDepart: null,
  };
  forfaits: Forfaits[];

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.voyageService.getForfaits()
      .subscribe(resultat => this.lesForfaits = resultat);
  }

}
