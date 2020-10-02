import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { PaperAllocationComponent } from './paper-allocation/paper-allocation.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'paper-allocation', component: PaperAllocationComponent},
  { path: 'manage-users', component: ManageUsersComponent},
  { path: 'super-admin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule)},
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
