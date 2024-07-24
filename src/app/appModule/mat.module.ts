import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
const material= [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     material
  ],
  exports:[
    material
  ]
  
})

export class MatModule { }
