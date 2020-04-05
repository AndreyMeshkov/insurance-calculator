import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const materials = [
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
