import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetidoresPageRoutingModule } from './competidores-routing.module';

import { CompetidoresPage } from './competidores.page';
import { PerfilComponent } from '../pages/perfil/perfil.component';

@NgModule({
  entryComponents:[PerfilComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetidoresPageRoutingModule
  ],
  declarations: [CompetidoresPage, PerfilComponent]
})
export class CompetidoresPageModule {}
