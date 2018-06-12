import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports : [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
