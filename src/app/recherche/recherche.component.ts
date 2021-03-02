import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
/* Importation du composant RechercheForfaits */
import { RechercheForfaits } from '../recherche-forfaits';
/* Importation des caractéristiques */
import {FormControl, Validators} from '@angular/forms';

/* Section pour la durée (en jours) du voyage */
interface Durees {
  value: number;
  affichage: string;
}
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
})
export class RechercheComponent implements OnInit {
  showFiller = false;
  dureesVoyages: Array<Durees> = [
    { value: 7, affichage: '7 jours'},
    { value: 14, affichage: '14 jours'},
    { value: 21, affichage: '21 jours'},
  ];
  villeDeparts: string[] = ['Québec', 'Montréal', 'Trois-Rivières', 'Matane', 'Laval', 'Rivière-Du-Loup', 'Sherbrooke'];
  @Input() recherche: RechercheForfaits;
  @Output() rechercheChange = new EventEmitter();

  /* Section changement de la date de départ */

  changeDateDepart(nouvelleValeur): void {
    const nouvelleRecherche: RechercheForfaits = {
      dateDepart: nouvelleValeur,
      duree: this.recherche.duree,
      nombreEtoiles: this.recherche.nombreEtoiles,
      villeDeDepart: this.recherche.villeDeDepart,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  /* Section changement du nombre d'étoiles */

  changeNombreEtoiles(nouvelleValeur): void {
    const nouvelleRecherche: RechercheForfaits = {
      dateDepart: this.recherche.dateDepart,
      nombreEtoiles: nouvelleValeur,
      duree: this.recherche.duree,
      villeDeDepart: this.recherche.villeDeDepart,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
    console.log(nouvelleValeur);
  }
  /* Section changement de la durée */

  changeDuree(nouvelleValeur): void {
    const nouvelleRecherche: RechercheForfaits = {
      dateDepart: this.recherche.dateDepart,
      nombreEtoiles: this.recherche.nombreEtoiles,
      duree: nouvelleValeur,
      villeDeDepart: this.recherche.villeDeDepart,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }
  changeVilleDepart(nouvelleValeur): void {
    const nouvelleRecherche: RechercheForfaits = {
      dateDepart: this.recherche.dateDepart,
      nombreEtoiles: this.recherche.nombreEtoiles,
      duree: this.recherche.duree,
      villeDeDepart: nouvelleValeur
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }


  constructor() { }
  ngOnInit(): void {
  }

}
