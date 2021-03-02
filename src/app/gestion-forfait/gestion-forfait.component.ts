import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatTable} from '@angular/material/table';
import {Forfaits} from '../forfaits';
import { VoyagesService } from '../voyages.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogNewForfaitComponent } from '../dialog-new-forfait/dialog-new-forfait.component';
import { tabCaracteristiques} from '../caracteristique';
import {DateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-gestion-forfait',
  templateUrl: './gestion-forfait.component.html',
  styleUrls: ['./gestion-forfait.component.css'],
})
export class GestionForfaitComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  /* Importation des caractéristiques */
  @Input() tabCaracteristiques: [];
  /* Colonnes à afficher */
  columnsToDisplay = [
    'dateDepart',
    'dateRetour',
    'prix',
    'nbEtoiles',
    'caract',
    'vedette',
    'actions'
  ];
  /* Données de l'api */
  forfaits: Forfaits[];
  /* L'élément sélectionné */
  selectedForfait: Forfaits;

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
  french(): void{
    this.adapter.setLocale('fr');
  }
  constructor(config: NgbRatingConfig, private voyageService: VoyagesService, public dialog: MatDialog, private adapter: DateAdapter<any>) {
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

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid) {
      this.voyageService.updateForfaits(this.selectedForfait)
        .subscribe(() => this.selectedForfait = null);
    }
  }


  onSelect(forfaits: Forfaits): void {
    this.selectedForfait = forfaits;
  }

  /* Dialogue d'ouverture pour l'édition des forfaits */

  openDialogEditionForfait(forfait: Forfaits): void {
    this.selectedForfait = forfait;
    const dialogRef = this.dialog.open(DialogNewForfaitComponent, {
      width: '60%',
      minHeight: '70vh',
      autoFocus: false,
      data: this.selectedForfait
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedForfait = result;
        this.voyageService.updateForfaits(this.selectedForfait)
          .subscribe(() => this.selectedForfait = null);
      }
    });
  }


    /* Suppression d'un forfait */
    onDelete(forfaits: Forfaits): void {
    this.voyageService.deleteForfaits(forfaits._id)
      .subscribe((result) => this.forfaits = this.forfaits.filter(f => f !== forfaits));
  }
  /* Ouverture du dialogue pour l'ajout d'un nouveau forfait */
  openDialogNewForfait(): void {
    const dialogRef = this.dialog.open(DialogNewForfaitComponent, {
      /* Largeur de la fenêtre de dialogue */
      width: '800px',
      autoFocus: false,
      maxHeight: '70vh',
      data: this.newForfait
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.newForfait = result;
        console.log(this.newForfait);
        this.voyageService.addForfaits(this.newForfait)
          .subscribe(forfait  => {
            this.forfaits.push(forfait);
            this.newForfait._id = null;
            this.newForfait.da = '1996400';
            this.newForfait.hotel = {
              nom: '',
              caracteristiques: [],
              nombreChambres: null,
              nombreEtoiles: null,
              coordonnees: ''
            };
            this.newForfait.dateRetour = '';
            this.newForfait.dateDepart = '';
            this.newForfait.rabais = null;
            this.newForfait.destination = '';
            this.newForfait.villeDepart = '';
            this.newForfait.prix = null;
            this.table.renderRows();
          });
      }
    });
  }
}
