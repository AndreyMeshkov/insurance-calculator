import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { GreenCardComponent } from './transport/green-card/green-card.component';
import { CascoComponent } from './transport/casco/casco.component';
import { OsgoComponent } from './transport/osgo/osgo.component';
import { ApartmentComponent } from './property/apartment/apartment.component';
import { AccidentComponent } from './health/accident/accident.component';
import { FamilyInsuranceComponent } from './health/family-insurance/family-insurance.component';
import { AbroadComponent } from './health/abroad/abroad.component';
import { ResponsibilityComponent } from './property/responsibility/responsibility.component';
import { BuildingComponent } from './property/building/building.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    GreenCardComponent,
    CascoComponent,
    OsgoComponent,
    ApartmentComponent,
    AccidentComponent,
    FamilyInsuranceComponent,
    AbroadComponent,
    ResponsibilityComponent,
    BuildingComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
