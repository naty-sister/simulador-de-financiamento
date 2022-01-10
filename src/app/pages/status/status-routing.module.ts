import { ReprovadoComponent } from './reprovado/reprovado.component';
import { AprovadoComponent } from './aprovado/aprovado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'aprovado', component: AprovadoComponent},
  {path: 'reprovado', component: ReprovadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
