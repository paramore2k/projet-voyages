import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Importation des composants pour les routes */

import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { AProposComponent } from './a-propos/a-propos.component';
import {MenuAccueilComponent} from './menu-accueil/menu-accueil.component';
import {GestionForfaitComponent} from './gestion-forfait/gestion-forfait.component';

const routes: Routes = [
  /* On laisse vide pour définir la page d'accueil par défaut lors de l'ouverture  */
  { path: '', component: MenuAccueilComponent },
  { path: 'accueil', component: MenuAccueilComponent },
  { path: 'forfaits', component: ForfaitCompletComponent },
  { path: 'gestion', component: GestionForfaitComponent },
  { path: 'a-propos', component: AProposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
