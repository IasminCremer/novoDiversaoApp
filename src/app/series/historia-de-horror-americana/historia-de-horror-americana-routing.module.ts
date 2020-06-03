import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriaDeHorrorAmericanaPage } from './historia-de-horror-americana.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriaDeHorrorAmericanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriaDeHorrorAmericanaPageRoutingModule {}
