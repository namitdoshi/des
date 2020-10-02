import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthComponent
  ],
  bootstrap: [AuthComponent]

})
export class AuthModule { }
