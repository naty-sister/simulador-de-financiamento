import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { FormularioComponent } from './formulario/formulario.component';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ProponenteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ]
})
export class ProponenteModule { }
