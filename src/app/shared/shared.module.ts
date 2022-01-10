import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { MaterialModule } from './material/material.module';
import { IMaskModule } from 'angular-imask';
import { TituloComponent } from './componentes/titulo/titulo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IMaskModule
  ],
  exports: [
    HeaderComponent,
    TituloComponent,
    MaterialModule,
    IMaskModule
  ]
})
export class SharedModule { }
