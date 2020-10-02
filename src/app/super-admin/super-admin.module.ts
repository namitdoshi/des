import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test/test.component';
import { SuperAdminRoutingModule } from './super-admin.routing.modules';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ],
  exports: [
    TestComponent
  ],
  bootstrap: [TestComponent]

})
export class SuperAdminModule { }
