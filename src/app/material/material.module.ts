import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

const materials = [
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatButtonModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
