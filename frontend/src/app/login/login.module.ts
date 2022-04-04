import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
