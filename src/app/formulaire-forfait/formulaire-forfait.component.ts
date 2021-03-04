import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {Caracteristique} from '../caracteristique';
import { Forfaits } from '../forfaits';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {VoyagesService} from '../voyages.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css'],
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
export class FormulaireForfaitComponent implements OnInit {
  @Input() caracteristiques: Array<Caracteristique>;
  id: string;
  direction: 'column';
  /* Variables pour les ngModel */
  villeDepart = new FormControl();
  /* Gestion des erreurs de la ville de destination */
  villeDestination: string[] = ['Mexique', 'Cancun', 'Cuba', 'Floride', 'New York', 'Puerto Plata'];
  /* Gestion des erreurs de la ville de départ */
  villeDeparts: string[] = ['Québec', 'Montréal', 'Trois-Rivières', 'Matane', 'Laval', 'Rivière-Du-Loup', 'Sherbrooke'];
  dateDepart: Date;
  dateRetour: Date;
  forfait: Forfaits;
  newForfait: any;
  /* Section nbg-rating */
  ctrl = new FormControl(null, Validators.required);
  /* Contrôle des étoiles */
  toggle(): void {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
/*
  tableauDesCarac: string[] = this.newForfait.hotel.caracteristiques;
*/


  /* Ajouter un forfait */

  onAdd(forfaitFormAjout: NgForm): void{
    console.log('test');
    /*this.getCaracteristiques();*/
    console.log(this.caracteristiques);
    this.voyageServices.addForfaits(this.newForfait)
      .subscribe(forfait => {
        forfaitFormAjout.resetForm();
        this.router.navigate(['/gestion']);
      });
  }
  /* Édition des forfaits */

  onEdit(forfaitFormAjout: NgForm): void{
    if (this.caracteristiques){
      this.newForfait.hotel.caracteristiques = [];
      this.getCaracteristiques();
    }
    this.voyageServices.updateForfaits(this.newForfait)
      .subscribe(() => {
        this.newForfait = null;
        this.router.navigate(['/gestion']);
      });
  }
  /* Recevoir les caractéristiques */

  getCaracteristiques(): void{
    this.caracteristiques.map(valeur => {
      if (valeur.selectionner) {
        this.newForfait.hotel.caracteristiques.push(valeur.nom);
      }
    });
  }

  constructor(private voyageServices: VoyagesService,
              private route: ActivatedRoute,
              private router: Router,
              config: NgbRatingConfig) {
    /* Définie la valeur maximum du nombre d'étoiles dans le formulaire */
    config.max = 5;
    config.readonly = false;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null){
      this.voyageServices.getForfait(this.id).subscribe(result =>
      {
        this.newForfait = result;
      });
    }
    else{
      this.newForfait = {
        da: '1996400',
        hotel: {
          caracteristiques: []
        }
      };
    }
  }

}
