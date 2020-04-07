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
import {AccidentComponent} from './health/accident/accident.component';
import {FamilyInsuranceComponent} from './health/family-insurance/family-insurance.component';
import {AbroadComponent} from './health/abroad/abroad.component';
import {ResponsibilityComponent} from './property/responsibility/responsibility.component';
import {BuildingComponent} from './property/building/building.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'health', component: HealthComponent},
  {path: 'property', component: PropertyComponent},
  {path: 'transport', component: TransportComponent},
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
