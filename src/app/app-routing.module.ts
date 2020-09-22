import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { PaperAllocationComponent } from './paper-allocation/paper-allocation.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'paper-allocation', component: PaperAllocationComponent},
  { path: 'manage-users', component: ManageUsersComponent},
  { path: '/', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', component: 404}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
