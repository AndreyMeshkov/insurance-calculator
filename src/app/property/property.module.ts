import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {PropertyRoutingModule} from './property-routing';
import {PropertyComponent} from './property.component';


@NgModule({
  declarations: [
    PropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    MaterialModule
  ]
})
export class PropertyModule {}
