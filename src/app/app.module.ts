import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransportComponent } from './transport/transport.component';
import { HealthComponent } from './health/health.component';
import { PropertyComponent } from './property/property.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { GreenCardComponent } from './transport/green-card/green-card.component';
import { CascoComponent } from './transport/casco/casco.component';
import { OsgoComponent } from './transport/osgo/osgo.component';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ApartmentComponent } from './property/apartment/apartment.component';
import { AccidentComponent } from './health/accident/accident.component';

@NgModule({
  declarations: [
    AppComponent,
    TransportComponent,
    HealthComponent,
    PropertyComponent,
    HomeComponent,
    ErrorComponent,
    GreenCardComponent,
    CascoComponent,
    OsgoComponent,
    ApartmentComponent,
    AccidentComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
