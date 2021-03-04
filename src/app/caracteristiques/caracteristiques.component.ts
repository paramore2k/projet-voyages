import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

import { Caracteristique } from '../caracteristique';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {
  /* Importation des caractéristiques via tabCaractéristiques */
  @Input() tabCaracteristiques: Array<Caracteristique>;
  /* Transission des caractéristiques via EventMitter */
  @Output() tabCaracteristiquesChange = new EventEmitter();
  /* Input lors de l'édidion des caractéristiques */
  @Input() editCaracteristiques: Array<string>;

/* Les caractéristiques */
  caracteristiques: Array<Caracteristique> = [
    { nom: 'Vue sur la plage', selectionner: false },
    { nom: 'Face à la plage', selectionner: false },
    { nom: `À proximité de la ville`, selectionner: false },
    { nom: 'Wifi ultra haute vitesse', selectionner: false },
    { nom: 'Piscine intérieure', selectionner: false },
    { nom: 'Ascenseur', selectionner: false },
    { nom: 'Air climatisé', selectionner: false },
    { nom: 'Déjeuner à la chambre', selectionner: false },
    { nom: `Près d'un arrêt d'autobus`, selectionner: false },
    { nom: 'Location de salles', selectionner: false },
    { nom: 'Personnes à mobilité réduite', selectionner: false },
    { nom: 'Salle de jeux pour enfants', selectionner: false }
  ];
  /* Utilisation de EventMitter pour transmettre les nouvelles caractéristiques */
  changement(valeur): any {
    this.tabCaracteristiquesChange.emit(this.caracteristiques);
  }

  constructor() { }

  /* Pour les caractéristiques déjà sélectionnés */
 ngOnInit(): void {
   if (this.editCaracteristiques !== undefined){
     this.caracteristiques.map( valeur => {
       if (this.editCaracteristiques.includes(valeur.nom)){
         valeur.selectionner = true;
       }
     });
   }
}
}
