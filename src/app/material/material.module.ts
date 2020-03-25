import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from "@angular/material/icon";

const  material = [
  MatToolbarModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
