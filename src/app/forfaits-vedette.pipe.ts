import { Pipe, PipeTransform } from '@angular/core';
import {Forfaits} from './forfaits';

@Pipe({
  name: 'forfaitsVedette'
})
export class ForfaitsVedettePipe implements PipeTransform {

  transform(forfait: Forfaits[]): Forfaits[] {
    /* Filtre pour afficher que les forfaits qui sont en vedette */
    return !forfait ? forfait : forfait.filter(forfaits => forfaits.forfaitEnVedette);
    }
}
