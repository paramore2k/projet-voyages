import { Pipe, PipeTransform } from '@angular/core';
import {Forfaits} from './forfaits';

@Pipe({
  name: 'forfaitsUrbain'
})
export class ForfaitsUrbainPipe implements PipeTransform {

  transform(forfait: Forfaits[]): Forfaits[] {
    /* Application d'un filtre pour les forfaits en proximité d'une ville */
    return !forfait ? forfait : forfait.filter(forfaits => forfaits.hotel.caracteristiques.includes(`À proximité de la ville`));
  }

}
