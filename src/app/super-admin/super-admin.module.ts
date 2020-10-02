import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { SuperAdminRoutingModule } from './super-admin.routing.modules';
import {AppComponent} from '../app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardCardComponent} from './dashboard/dashboard-card/dashboard-card.component';
import {DashboardSpinnerComponent} from './dashboard/dashboard-spinner/dashboard-spinner.component';
import {DasboardTabsComponent} from './dashboard/dasboard-tabs/dasboard-tabs.component';
import {PaperAllocationComponent} from './paper-allocation/paper-allocation.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {ExaminationListComponent} from './paper-allocation/examination-list/examination-list.component';
import {AllocateExaminationComponent} from './paper-allocation/allocate-examination/allocate-examination.component';
import {ViewAllocationComponent} from './paper-allocation/view-allocation/view-allocation.component';
import {ApproveUsersComponent} from './manage-users/approve-users/approve-users.component';
import {AdminUsersComponent} from './manage-users/admin-users/admin-users.component';
import {UserDetailsComponent} from './manage-users/user-details/user-details.component';



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
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuperAdminRoutingModule
  ],
  exports: [
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
    UserDetailsComponent
  ],
  bootstrap: [AppComponent,
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
    UserDetailsComponent]

})
export class SuperAdminModule { }
