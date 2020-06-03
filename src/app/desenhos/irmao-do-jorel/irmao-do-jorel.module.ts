import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrmaoDoJorelPageRoutingModule } from './irmao-do-jorel-routing.module';

import { IrmaoDoJorelPage } from './irmao-do-jorel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrmaoDoJorelPageRoutingModule
  ],
  declarations: [IrmaoDoJorelPage]
})
export class IrmaoDoJorelPageModule {}
