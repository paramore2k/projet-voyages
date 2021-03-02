import { Pipe, PipeTransform } from '@angular/core';
import {Forfaits} from './forfaits';

@Pipe({
  name: 'forfaitsPlage'
})
export class ForfaitsPlagePipe implements PipeTransform {
  transform(forfait: Forfaits[]): Forfaits[] {
/* Filtre pour afficher que les hôtels qui sont Face à la plage */
    return !forfait ? forfait : forfait.filter(
      forfaitPlage => forfaitPlage.hotel.caracteristiques.includes('Face à la plage'));
  }

}
