import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { DashboardSpinnerComponent } from './dashboard/dashboard-spinner/dashboard-spinner.component';
import { DasboardTabsComponent } from './dashboard/dasboard-tabs/dasboard-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DashboardCardComponent,
    DashboardSpinnerComponent,
    DasboardTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
