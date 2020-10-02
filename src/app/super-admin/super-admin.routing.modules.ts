import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from "./test/test.component";

const superAdminRoutes: Routes = [
  { path: '/test', component: TestComponent},  

];

@NgModule({
  imports: [RouterModule.forChild(superAdminRoutes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
