import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';


class Caracteristique {
}

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {
  /* Importation des caractéristiques via tabCaractéristiques */
  @Input() carac: Array<Caracteristique>;

  /* Input pour le changement lors de la sélection des caractéristiques via EventMitter */
  @Output() tabChangeCaracteristiques = new EventEmitter();
  /* Input lors de l'édidion des caractéristiques */
  @Input() tabCaracteristiquesEdit: Array<string>;

  caracteristiques: Array<Caracteristique> = [
    { nom: 'Vue sur la plage', selectionner: false },
    { nom: 'Face à la plage', selectionner: false },
    { nom: `À proximité de la ville`, selectionner: false },
    { nom: 'WIFI Ultra haute-vitesse', selectionner: false },
    { nom: 'Piscine intérieure', selectionner: false },
    { nom: 'Ascenseur', selectionner: false },
    { nom: 'Air climatisé', selectionner: false },
    { nom: 'Déjeuner à la chambre', selectionner: false },
    { nom: `Près d'un arrêt d'autobus`, selectionner: false },
    { nom: 'Location de salles', selectionner: false },
    { nom: 'Personnes à mobilité réduite', selectionner: false },
    { nom: 'Salle de jeux pour enfants', selectionner: false }
  ];
  changement(valeur): any {
    console.log('Je me rends ici !');
    this.tabChangeCaracteristiques.emit(this.caracteristiques);
    console.log(valeur);
    console.log('Jai pousser');
  }

  constructor() { }

  /* Pour les caractéristiques déjà sélectionnés */
 ngOnInit(): void {
}
}
