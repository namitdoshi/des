import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { PaperAllocationComponent } from './paper-allocation/paper-allocation.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ScDashboardComponent } from './scanner/sc-dashboard/sc-dashboard.component'
import { ScPaperAllocationComponent } from './scanner/sc-paper-allocation/sc-paper-allocation.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'paper-allocation', component: PaperAllocationComponent},
  { path: 'manage-users', component: ManageUsersComponent},
  { path: 'scanner', component: ScannerComponent, children: [
    { path: 'dashboard', component: ScDashboardComponent},
    { path: 'paper-allocation', component: ScPaperAllocationComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
