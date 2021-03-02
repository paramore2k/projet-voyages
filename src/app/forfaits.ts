import { Hotels } from './hotels';

export interface Forfaits {
  _id: number;
  hotel: Hotels;
  destination: string;
  villeDepart: string;
  photo: string;
  forfaitEnVedette: boolean;
  prix: number;
  dateDepart: string;
  dateRetour: string;
  rabais: number;
  da?: string;
}
