import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from '../pages/perfil/perfil.component';

import { CompetidoresPage } from './competidores.page';

const routes: Routes = [
  {
    path: '',
    component: CompetidoresPage
  },
  {
    path:'perfil',
    component:PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetidoresPageRoutingModule {}
