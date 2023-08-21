import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { LoginFormComponent } from './login-form/login-form.component';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  entryComponents: [LoginFormComponent]
})
export class LoginModule { }
