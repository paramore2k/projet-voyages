import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

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
  myControl = new FormControl();
  myControl2 = new FormControl();
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

  constructor(config: NgbRatingConfig) {
    /* Définie la valeur maximum du nombre d'étoiles dans le formulaire */
    config.max = 5;
    config.readonly = false;
  }


  ngOnInit(): void {
  }

}
