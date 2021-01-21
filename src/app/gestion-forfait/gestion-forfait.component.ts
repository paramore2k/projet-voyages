import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatTable} from '@angular/material/table';
import {Forfaits} from '../forfaits';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-gestion-forfait',
  templateUrl: './gestion-forfait.component.html',
  styleUrls: ['./gestion-forfait.component.css'],
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
export class GestionForfaitComponent implements OnInit {
  forfaits: Forfaits[];
  selectedForfait: Forfaits;
  columnsToDisplay = ['destination', 'villeDepart', 'prix', 'nomHotel', 'infoHotel', 'nbEtoiles', 'nbChambres', 'caract', 'dateDepart', 'dateRetour', 'rabais', 'vedette', 'actions'];
  myControl = new FormControl();
  myControl2 = new FormControl();
  newForfait: Forfaits;
  options: string[] = ['Mexique', 'Cancun', 'Cuba', 'Floride', 'New York', 'Puerto Plata'];
  villeDeparts: string[] = ['Québec', 'Montréal', 'Trois-Rivières', 'Matane', 'Laval', 'Rivière-Du-Loup', 'Sherbrooke'];
  ctrl = new FormControl(null, Validators.required);
  toggle(): void {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  constructor(config: NgbRatingConfig, private voyageService: VoyagesService) {
    /* Définie la valeur maximum du nombre d'étoiles dans le formulaire */
    config.max = 5;
    config.readonly = false;
  }
  ngOnInit(): void {
    this.newForfait = {
      _id: null,
      dateDepart: '',
      dateRetour: '',
      duree: '',
      forfaitEnVedette: false,
      hotel: undefined,
      photo: '',
      prix: 0,
      rabais: 0,
      villeDepart: '',
      destination: ''};
    this.getForfaits();
  }
  getForfaits(): void {
    this.voyageService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
  onAdd(tableForfaits: MatTable<Forfaits>, forfaitFormAjout: NgForm): void {
    if (forfaitFormAjout.valid) {
      // @ts-ignore
      this.voyageService.addForfaits(this.newForfait)
        .subscribe(forfait  => { this.forfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows(); });
    }
  }
  onEdit(forfaitFormEdition: NgForm): void {
    console.log('mise-a-jour');
    if (forfaitFormEdition.valid) {
      this.voyageService.updateForfaits(this.selectedForfait)
        .subscribe(() => this.selectedForfait = null);
    }
  }

  onSelect(forfaits: Forfaits): void {
    this.selectedForfait = forfaits;
  }


  onDelete(forfaits: Forfaits): void {
    this.voyageService.deleteForfaits(forfaits._id)
      // @ts-ignore
      .subscribe(result => this.forfaits = this.forfaits.filter(f => f !== forfaits));
  }
}
