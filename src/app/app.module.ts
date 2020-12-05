import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Autres modules importés */

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { GestionForfaitComponent } from './gestion-forfait/gestion-forfait.component';
import { RechercheComponent } from './recherche/recherche.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DatePipePipe } from './date-pipe.pipe';
import { PrixForfaitComponent } from './prix-forfait/prix-forfait.component';


@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    GestionForfaitComponent,
    RechercheComponent,
    DatePipePipe,
    PrixForfaitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatAutocompleteModule,
    NgbModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
