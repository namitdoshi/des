import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './super-admin/dashboard/dashboard.component';
import { ManageUsersComponent } from './super-admin/manage-users/manage-users.component';
import { PaperAllocationComponent } from './super-admin/paper-allocation/paper-allocation.component';

const routes: Routes = [
  { path: 'super-admin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule)},
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
