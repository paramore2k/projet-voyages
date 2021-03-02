import {Pipe, PipeTransform} from '@angular/core';
import {Forfaits} from './forfaits';
import {RechercheForfaits} from './recherche-forfaits';

@Pipe({
  name: 'recherchepipe'
})
export class RecherchepipePipe implements PipeTransform {

  transform(forfaits: Forfaits[], recherche: RechercheForfaits): Forfaits [] {
    let forfaitsTrouves = forfaits;
    if (recherche.nombreEtoiles === null && recherche.duree === null && recherche.dateDepart === null) {
      return forfaits;
    }
    if (recherche.nombreEtoiles !== null) {
      // tslint:disable-next-line:no-shadowed-variable
      forfaitsTrouves = forfaitsTrouves.filter(forfaits => forfaits.hotel.nombreEtoiles === recherche.nombreEtoiles);
    }
    if (recherche.duree !== null){
      // tslint:disable-next-line:no-shadowed-variable
      forfaitsTrouves = forfaitsTrouves.filter(forfaits => this.duree(forfaits.dateDepart, forfaits.dateRetour) === recherche.duree);
    }
    return forfaitsTrouves;
    }

  /* Calcul de la durée du voyage */
  public duree(dateDepart: string, dateRetour: string): any {
    const date1: Date = new Date(dateDepart);
    const date2: Date = new Date(dateRetour);
    const jours = (date2.valueOf() - date1.valueOf()) / (1000 * 3600 * 24);
    console.log(jours);
    return jours;
  }
}


