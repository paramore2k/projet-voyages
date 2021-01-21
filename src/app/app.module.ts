import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Autres modules importés */

/* Section Material */
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

/* Section des component */
import { PrixForfaitComponent } from './prix-forfait/prix-forfait.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { MenuAccueilComponent } from './menu-accueil/menu-accueil.component';
import { HeaderComponent } from './header/header.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { GestionForfaitComponent } from './gestion-forfait/gestion-forfait.component';
import { RechercheComponent } from './recherche/recherche.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatePipePipe } from './date-pipe.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import {VoyagesService} from './voyages.service';



@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    GestionForfaitComponent,
    RechercheComponent,
    DatePipePipe,
    PrixForfaitComponent,
    AProposComponent,
    MenuAccueilComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
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
    MatNativeDateModule,
    MatMenuModule,
    FormsModule,
    MatTableModule
  ],
  providers: [VoyagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
