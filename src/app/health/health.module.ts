import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HealthRoutingModule} from './health-routing.module';
import {MaterialModule} from '../material/material.module';
import {HealthComponent} from './health.component';


@NgModule({
  declarations: [
    HealthComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    MaterialModule
  ]
})
export class HealthModule {}
