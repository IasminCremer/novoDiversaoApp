import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaDeHorrorAmericanaPageRoutingModule } from './historia-de-horror-americana-routing.module';

import { HistoriaDeHorrorAmericanaPage } from './historia-de-horror-americana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaDeHorrorAmericanaPageRoutingModule
  ],
  declarations: [HistoriaDeHorrorAmericanaPage]
})
export class HistoriaDeHorrorAmericanaPageModule {}
