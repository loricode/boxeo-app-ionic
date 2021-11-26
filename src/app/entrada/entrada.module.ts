import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EntradaPageRoutingModule } from './entrada-routing.module';

import { EntradaPage } from './entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EntradaPageRoutingModule
  ],
  declarations: [EntradaPage]
})
export class EntradaPageModule {}
