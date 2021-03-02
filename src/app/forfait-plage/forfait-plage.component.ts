import {Component, Input, OnInit} from '@angular/core';
import { VoyagesService } from '../voyages.service';
import {Forfaits} from '../forfaits';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, NgForm, Validators} from '@angular/forms';



@Component({
  selector: 'app-forfait-plage',
  templateUrl: './forfait-plage.component.html',
  styleUrls: ['./forfait-plage.component.css']
})
export class ForfaitPlageComponent implements OnInit {

  @Input() forfaitsPlage: Forfaits[];
  /* Section nbg-rating */
  ctrl = new FormControl(null, Validators.required);

  toggle(): void {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  constructor(private voyageService: VoyagesService, config: NgbRatingConfig) {
    /* Définie la valeur maximum du nombre d'étoiles dans le formulaire */
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.getForfaits();
  }
  /* Pour reçevoir les forfaits */
  getForfaits(): void {
    this.voyageService.getForfaits()
      .subscribe(resultat => this.forfaitsPlage = resultat);
  }
  /* Calcul de la durée du voyage */
  public duree(dateDepart: string, dateRetour: string): any {
    const date1: Date = new Date(dateDepart);
    const date2: Date = new Date(dateRetour);
    return (date2.valueOf() - date1.valueOf()) / (1000 * 3600 * 24);
  }

}
