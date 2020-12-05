import { Hotels } from './hotels';

export interface Forfaits {
  id: number;
  hotel: Hotels;
  destination: string;
  villeDepart: string;
  photo: string;
  forfaitEnVedette: boolean;
  prix: number;
  dateDepart: string;
  dateRetour: string;
  duree: string;
  rabais: number;
}
