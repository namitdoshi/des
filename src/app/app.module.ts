import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { DashboardSpinnerComponent } from './dashboard/dashboard-spinner/dashboard-spinner.component';
import { DasboardTabsComponent } from './dashboard/dasboard-tabs/dasboard-tabs.component';
import { PaperAllocationComponent } from './paper-allocation/paper-allocation.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ExaminationListComponent } from './paper-allocation/examination-list/examination-list.component';
import { AllocateExaminationComponent } from './paper-allocation/allocate-examination/allocate-examination.component';
import { ViewAllocationComponent } from './paper-allocation/view-allocation/view-allocation.component';
import { ApproveUsersComponent } from './manage-users/approve-users/approve-users.component';
import { AdminUsersComponent } from './manage-users/admin-users/admin-users.component';
import { UserDetailsComponent } from './manage-users/user-details/user-details.component';
import { AuthComponent } from './auth/auth.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import { ScannerComponent } from './scanner/scanner.component';
import { ScNavComponent } from './scanner/sc-nav/sc-nav.component';
import { ScDashboardComponent } from './scanner/sc-dashboard/sc-dashboard.component';
import { ScCardComponent } from './scanner/sc-dashboard/sc-card/sc-card.component';
import { ScPaperAllocationComponent } from './scanner/sc-paper-allocation/sc-paper-allocation.component';
import { ScTableCardComponent } from './scanner/sc-paper-allocation/sc-table-card/sc-table-card.component';
import { ScExamCardComponent } from './scanner/sc-paper-allocation/sc-exam-card/sc-exam-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DashboardCardComponent,
    DashboardSpinnerComponent,
    DasboardTabsComponent,
    PaperAllocationComponent,
    ManageUsersComponent,
    ExaminationListComponent,
    AllocateExaminationComponent,
    ViewAllocationComponent,
    ApproveUsersComponent,
    AdminUsersComponent,
    UserDetailsComponent,
    AuthComponent,
    ScannerComponent,
    ScNavComponent,
    ScDashboardComponent,
    ScCardComponent,
    ScPaperAllocationComponent,
    ScTableCardComponent,
    ScExamCardComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
