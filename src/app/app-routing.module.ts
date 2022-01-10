import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'proponente', loadChildren: () => import('./pages/proponente/proponente.module').then(m => m.ProponenteModule)},
  {path: 'imovel', loadChildren: () => import('./pages/imovel/imovel.module').then(m => m.ImovelModule)},
  {path: 'status', loadChildren: () => import('./pages/status/status.module').then(m => m.StatusModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
