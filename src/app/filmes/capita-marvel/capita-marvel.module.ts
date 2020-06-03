import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapitaMarvelPageRoutingModule } from './capita-marvel-routing.module';

import { CapitaMarvelPage } from './capita-marvel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapitaMarvelPageRoutingModule
  ],
  declarations: [CapitaMarvelPage]
})
export class CapitaMarvelPageModule {}
