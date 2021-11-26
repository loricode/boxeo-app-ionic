import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { EntradaPageModule } from '../entrada/entrada.module';
import { SegundaPageModule } from '../segunda/segunda.module';
import { HomePageRoutingModule } from './home-routing.module';
import { BienvenidaPageModule } from '../bienvenida/bienvenida.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    EntradaPageModule,
    SegundaPageModule,
    BienvenidaPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
