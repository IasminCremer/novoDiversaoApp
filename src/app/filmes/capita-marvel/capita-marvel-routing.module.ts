import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapitaMarvelPage } from './capita-marvel.page';

const routes: Routes = [
  {
    path: '',
    component: CapitaMarvelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapitaMarvelPageRoutingModule {}
