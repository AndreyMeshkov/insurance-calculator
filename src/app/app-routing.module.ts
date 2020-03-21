import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HealthComponent} from './health/health.component';
import {PropertyComponent} from './property/property.component';
import {TransportComponent} from './transport/transport.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'health', component: HealthComponent},
  {path: 'property', component: PropertyComponent},
  {path: 'transport', component: TransportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
