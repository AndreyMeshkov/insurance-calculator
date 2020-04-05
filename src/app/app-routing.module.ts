import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HealthComponent} from './health/health.component';
import {PropertyComponent} from './property/property.component';
import {TransportComponent} from './transport/transport.component';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {GreenCardComponent} from './transport/green-card/green-card.component';
import {OsgoComponent} from './transport/osgo/osgo.component';
import {CascoComponent} from './transport/casco/casco.component';
import {ApartmentComponent} from './property/apartment/apartment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'health', component: HealthComponent},
  {path: 'property', component: PropertyComponent},
  {path: 'transport', component: TransportComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'green-card', component: GreenCardComponent},
  {path: 'osgo', component: OsgoComponent},
  {path: 'casco', component: CascoComponent},
  {path: 'apartment', component: ApartmentComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
