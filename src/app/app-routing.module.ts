import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Importation des composants pour les routes */

import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { AProposComponent } from './a-propos/a-propos.component';
import {GestionForfaitComponent} from './gestion-forfait/gestion-forfait.component';
import {ForfaitUrbainComponent} from './forfait-urbain/forfait-urbain.component';
import {ForfaitPlageComponent} from './forfait-plage/forfait-plage.component';
import {AccueilComponent} from './accueil/accueil.component';
import {GraphiquesPieComponent} from './graphiques-pie/graphiques-pie.component';

const routes: Routes = [
  /* On laisse vide pour définir la page d'accueil par défaut lors de l'ouverture  */
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'forfaits-urbain', component: ForfaitUrbainComponent },
  { path: 'forfaits-plage', component: ForfaitPlageComponent },
  { path: 'gestion', component: GestionForfaitComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'graphiques', component: GraphiquesPieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
