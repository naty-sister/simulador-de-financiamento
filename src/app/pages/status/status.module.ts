import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { AprovadoComponent } from './aprovado/aprovado.component';
import { ReprovadoComponent } from './reprovado/reprovado.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AprovadoComponent,
    ReprovadoComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ]
})
export class StatusModule { }
