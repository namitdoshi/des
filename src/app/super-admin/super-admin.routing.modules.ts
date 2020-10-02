import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PaperAllocationComponent} from './paper-allocation/paper-allocation.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';

const superAdminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'paper-allocation', component: PaperAllocationComponent},
  { path: 'manage-users', component: ManageUsersComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(superAdminRoutes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
