import {Pipe, PipeTransform} from '@angular/core';
import {Forfaits} from './forfaits';
import {RechercheForfaits} from './recherche-forfaits';

@Pipe({
  name: 'recherchepipe'
})
export class RecherchepipePipe implements PipeTransform {

  transform(forfaits: Forfaits[], recherche: RechercheForfaits): Forfaits [] {
    let forfaitsTrouves = forfaits;
    if (recherche.nombreEtoiles === null
      && recherche.duree === null
      && recherche.villeDeDepart === null
      && recherche.dateDepart === null) {
      return forfaits;
    }
    if (recherche.nombreEtoiles !== null) {
      forfaitsTrouves = forfaitsTrouves.filter(forfait => forfait.hotel.nombreEtoiles === recherche.nombreEtoiles);
    }
    if (recherche.dateDepart !== null){
      /* On utilise toIsoString pour convertir la date en string */
      forfaitsTrouves = forfaitsTrouves.filter(forfait => new Date(forfait.dateDepart).toISOString()
        === new Date(recherche.dateDepart).toISOString());
    }
    if (recherche.villeDeDepart !== null){
      forfaitsTrouves = forfaitsTrouves.filter(forfait => forfait.villeDepart.toString() === recherche.villeDeDepart.toString());
    }
    if (recherche.duree !== null){
      forfaitsTrouves = forfaitsTrouves.filter(forfait => this.duree(forfait.dateDepart, forfait.dateRetour) === recherche.duree);
    }
    return forfaitsTrouves;
    }

  /* Calcul de la durée du voyage */
  public duree(dateDepart: string, dateRetour: string): any {
    const date1: Date = new Date(dateDepart);
    const date2: Date = new Date(dateRetour);
    return (date2.valueOf() - date1.valueOf()) / (1000 * 3600 * 24);
  }
}


