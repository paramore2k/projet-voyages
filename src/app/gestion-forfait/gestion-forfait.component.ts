import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatTable} from '@angular/material/table';
import {Forfaits} from '../forfaits';
import { VoyagesService } from '../voyages.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogNewForfaitComponent } from '../dialog-new-forfait/dialog-new-forfait.component';
import {DateAdapter} from '@angular/material/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogueConfirmSuppComponent} from '../dialogue-confirm-supp/dialogue-confirm-supp.component';

@Component({
  selector: 'app-gestion-forfait',
  templateUrl: './gestion-forfait.component.html',
  styleUrls: ['./gestion-forfait.component.css'],
})

export class GestionForfaitComponent implements OnInit {
  caracteristiques: [
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

  @ViewChild(MatTable) table: MatTable<any>;
  /* Importation des caractéristiques */
  /* Colonnes à afficher */
  columnsToDisplay = [
    'dateDepart',
    'dateRetour',
    'prix',
    'nbEtoiles',
    'vedette',
    'actions'
  ];
  /* Données de l'api */
  forfaits: Forfaits[];
  /* L'élément sélectionné */
  selectedForfait: Forfaits;
  id: string;
  /* Ajout d'un forfait */
  newForfait: Forfaits;

  /* Section nbg-rating */
  ctrl = new FormControl(null, Validators.required);

  toggle(): void {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
  constructor(config: NgbRatingConfig, private voyageService: VoyagesService, public dialog: MatDialog, private adapter: DateAdapter<any>,
              private route: ActivatedRoute,
              private router: Router) {
    /* Définie la valeur maximum du nombre d'étoiles dans le formulaire */
    config.max = 5;
    config.readonly = false;

  }
  ngOnInit(): void {
    /* Valeur pour les nouveaux forfaits */
    this.newForfait = {
      forfaitEnVedette: false,
      photo: 'https://i.imgur.com/yI8KC7w.jpg',
      _id: null,
      da : '1996400',
      hotel : {
        nom: '',
        /* Importation des caractéristique à partir du tableau */
        caracteristiques: [],
        nombreChambres: null,
        nombreEtoiles: null,
        coordonnees: ''},
      dateRetour : '',
      dateDepart : '',
      rabais : null,
      destination : '',
      villeDepart : '',
      prix : null
  };
    this.getForfaits();

  }

  /* Recevoir les forfaits */
  getForfaits(): void {
    this.voyageService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

  /* Section ngForm pour l'édition d'un formulaire */

  /* Édition des forfaits */
  onEdit(forfaitFormAjout: NgForm): void{
    if (this.caracteristiques){
      this.newForfait.hotel.caracteristiques = [];
      this.getCaracteristiques();
    }
    this.voyageService.updateForfaits(this.newForfait)
      .subscribe(() => {
        this.newForfait = null;
        this.router.navigate(['/gestion']);
      });
  }
  getCaracteristiques(): void{
    this.caracteristiques.map(valeur => {
      if (valeur.selectionner) {
        this.newForfait.hotel.caracteristiques.push(valeur.nom);
      }
    });
  }

  onSelect(forfaits: Forfaits): void {
    this.selectedForfait = forfaits;
  }

  /* Dialogue d'ouverture pour l'édition des forfaits */

/*  openDialogEditionForfait(forfait: Forfaits): void {
    this.selectedForfait = forfait;
    const dialogRef = this.dialog.open(DialogueConfirmSuppComponent, {
      width: '60%',
      minHeight: '70vh',
      autoFocus: false,
      data: { forfait }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedForfait = result;
        this.voyageService.updateForfaits(this.selectedForfait)
          .subscribe(() => this.selectedForfait = null);
      }
    });
  }*/


    /* Suppression d'un forfait */
    onDelete(forfaits: Forfaits): void {
    this.voyageService.deleteForfaits(forfaits._id)
      .subscribe(result => {
        this.forfaits = this.forfaits.filter(f => f !== forfaits);
      });
}

  /* Ouverture du dialogue pour l'ajout d'un nouveau forfait */
  openDialog(forfaits: Forfaits): void {
    const dialogRef = this.dialog.open(DialogueConfirmSuppComponent, {
      /* Largeur de la fenêtre de dialogue */
      width: '600px',
      autoFocus: false,
      maxHeight: '70vh',
      data: { forfait: forfaits}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'close') {
        this.onDelete(result);
      }
    });
  }
}
