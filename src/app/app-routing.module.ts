import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {GreenCardComponent} from './transport/green-card/green-card.component';
import {OsgoComponent} from './transport/osgo/osgo.component';
import {CascoComponent} from './transport/casco/casco.component';
import {ApartmentComponent} from './property/apartment/apartment.component';
import {AccidentComponent} from './health/accident/accident.component';
import {FamilyInsuranceComponent} from './health/family-insurance/family-insurance.component';
import {AbroadComponent} from './health/abroad/abroad.component';
import {ResponsibilityComponent} from './property/responsibility/responsibility.component';
import {BuildingComponent} from './property/building/building.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'health', loadChildren: () => import('./health/health.module').then(m => m.HealthModule)},
  {path: 'property', loadChildren: () => import('./property/property.module').then(m => m.PropertyModule)},
  {path: 'transport', loadChildren: () => import('./transport/transport.module').then(m => m.TransportModule)},
  {path: 'error', component: ErrorComponent},
  {path: 'transport/green-card', component: GreenCardComponent},
  {path: 'transport/osgo', component: OsgoComponent},
  {path: 'transport/casco', component: CascoComponent},
  {path: 'property/apartment', component: ApartmentComponent},
  {path: 'health/accident', component: AccidentComponent},
  {path: 'health/family-insurance', component: FamilyInsuranceComponent},
  {path: 'health/abroad', component: AbroadComponent},
  {path: 'property/responsibility', component: ResponsibilityComponent},
  {path: 'property/building', component: BuildingComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
