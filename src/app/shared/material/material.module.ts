import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from "@angular/material/select";

const MaterialModulos = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSelectModule,
  MatToolbarModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    MaterialModulos
  ],
  exports: [
    MaterialModulos
  ]
})
export class MaterialModule { }
