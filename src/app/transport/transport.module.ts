import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {TransportRoutingModule} from './transport-routing';
import {TransportComponent} from './transport.component';

@NgModule({
  declarations: [
    TransportComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    MaterialModule
  ]
})
export class TransportModule {}
