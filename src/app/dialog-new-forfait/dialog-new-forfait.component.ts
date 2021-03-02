import {Component, Inject, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { Forfaits } from '../forfaits';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, NgForm, Validators, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {tabCaracteristiques} from '../caracteristique';
import {MatTable} from '@angular/material/table';


@Component({
  selector: 'app-dialog-new-forfait',
  templateUrl: './dialog-new-forfait.component.html',
  styleUrls: ['./dialog-new-forfait.component.css'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class DialogNewForfaitComponent implements OnInit {
  @Input() caracteristiquesEdit: Array<string>;
  /* Variables pour les ngModel */
  villeDepart = new FormControl();
  destination: string[] = ['Mexique', 'Cancun', 'Cuba', 'Floride', 'New York', 'Puerto Plata'];
  /* Gestion des erreurs de la ville de destination */
  villeDestination: string[] = ['Mexique', 'Cancun', 'Cuba', 'Floride', 'New York', 'Puerto Plata'];
  /* Gestion des erreurs de la ville de départ */
  villeDeparts: string[] = ['Québec', 'Montréal', 'Trois-Rivières', 'Matane', 'Laval', 'Rivière-Du-Loup', 'Sherbrooke'];
  caracteristiques: string;
  dateDepart: Date;
  dateRetour: Date;
  tableauDesCarac: string[] = this.newForfait.hotel.caracteristiques;
  caracteristiqueHotel: string[] = tabCaracteristiques;

  /* Section nbg-rating */
  ctrl = new FormControl(null, Validators.required);

  toggle(): void {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  /* Section caractéristiques / items avec les forfaits (l'hôtel) */

  changerOption(event, caracChoisies): string[] {
    /*console.log('Valeur des variables' + ' ' + caracChoisies);*/
    if (event) {
      this.tableauDesCarac.push(caracChoisies);
    } else if (!event) {
      const index: number = this.tableauDesCarac.indexOf(caracChoisies);
      if (index !== 1) {
        this.tableauDesCarac.splice(index, 1);
      }
    }
    return this.newForfait.hotel.caracteristiques = this.tableauDesCarac;
  }

  /* Pour l'édition, récupérer ce qui est déjà sélectionné */

  verifierCoches(i): any {
    const tableau: Array<string> = this.tableauDesCarac;
    const index: number = tableau.indexOf(i);
    if (index !== -1) {
      return true;
    }
  }

  constructor(config: NgbRatingConfig,
              public dialogRef: MatDialogRef<DialogNewForfaitComponent>,
              @Inject(MAT_DIALOG_DATA) public newForfait: Forfaits,
              @Inject(MAT_DIALOG_DATA) public selectedForfaits: Forfaits,
  ) {
    /* Définie la valeur maximum du nombre d'étoiles dans le formulaire */
    config.max = 5;
    config.readonly = false;
  }
  onAnnulerClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
/*    if (this.tableauDesCarac !== null) {
      this.tableauDesCarac.map(value => {
        console.log(this.tableauDesCarac);
        if (this.tableauDesCarac.includes(value)) {
        }
      });
    }*/
  }
}

