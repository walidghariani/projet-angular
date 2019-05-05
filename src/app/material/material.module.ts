import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatSortModule,
  MatDialogModule,
  MatToolbarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatSnackBarModule
} 
from '@angular/material'; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports : [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
