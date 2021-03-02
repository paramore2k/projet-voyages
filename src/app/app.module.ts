import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';



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
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';

/* Section des component */
import { PrixForfaitComponent } from './prix-forfait/prix-forfait.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { HeaderComponent } from './header/header.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { GestionForfaitComponent } from './gestion-forfait/gestion-forfait.component';
import { RechercheComponent } from './recherche/recherche.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import {VoyagesService} from './voyages.service';
import { DialogNewForfaitComponent } from './dialog-new-forfait/dialog-new-forfait.component';
import { ForfaitUrbainComponent } from './forfait-urbain/forfait-urbain.component';
import { ForfaitPlageComponent } from './forfait-plage/forfait-plage.component';
import { AdministrationComponent } from './administration/administration.component';
import { AccueilComponent } from './accueil/accueil.component';
import {MatSelectModule} from '@angular/material/select';
import { RecherchepipePipe } from './recherchepipe.pipe';
import { ListeDesForfaitsComponent } from './liste-des-forfaits/liste-des-forfaits.component';
import { ForfaitsPlagePipe } from './forfaits-plage.pipe';
import { ForfaitsUrbainPipe } from './forfaits-urbain.pipe';
import { ForfaitsVedettePipe } from './forfaits-vedette.pipe';
import { GraphiquesPieComponent } from './graphiques-pie/graphiques-pie.component';
import { GraphiquesBarComponent } from './graphiques-bar/graphiques-bar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';



@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    GestionForfaitComponent,
    RechercheComponent,
    PrixForfaitComponent,
    AProposComponent,
    HeaderComponent,
    DialogNewForfaitComponent,
    ForfaitUrbainComponent,
    ForfaitPlageComponent,
    AdministrationComponent,
    AccueilComponent,
    RecherchepipePipe,
    ListeDesForfaitsComponent,
    ForfaitsPlagePipe,
    ForfaitsUrbainPipe,
    ForfaitsVedettePipe,
    GraphiquesPieComponent,
    GraphiquesBarComponent,
    CaracteristiquesComponent
  ],
    imports: [
        MatSliderModule,
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
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
        MatPaginatorModule,
        ChartsModule
    ],
  providers: [VoyagesService,
            {provide: MAT_DATE_LOCALE, useValue: 'fr-CA'},
            {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
            {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
