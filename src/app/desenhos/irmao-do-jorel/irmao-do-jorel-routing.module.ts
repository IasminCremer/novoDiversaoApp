import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrmaoDoJorelPage } from './irmao-do-jorel.page';

const routes: Routes = [
  {
    path: '',
    component: IrmaoDoJorelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrmaoDoJorelPageRoutingModule {}
