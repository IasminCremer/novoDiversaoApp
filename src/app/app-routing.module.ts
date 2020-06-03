import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'coringa',
    loadChildren: () => import('./filmes/coringa/coringa.module').then( m => m.CoringaPageModule)
  },
  {
    path: 'capita-marvel',
    loadChildren: () => import('./filmes/capita-marvel/capita-marvel.module').then( m => m.CapitaMarvelPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./series/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'historia-de-horror-americana',
    loadChildren: () => import('./series/historia-de-horror-americana/historia-de-horror-americana.module').then( m => m.HistoriaDeHorrorAmericanaPageModule)
  },
  {
    path: 'rick-morty',
    loadChildren: () => import('./desenhos/rick-morty/rick-morty.module').then( m => m.RickMortyPageModule)
  },
  {
    path: 'irmao-do-jorel',
    loadChildren: () => import('./desenhos/irmao-do-jorel/irmao-do-jorel.module').then( m => m.IrmaoDoJorelPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
