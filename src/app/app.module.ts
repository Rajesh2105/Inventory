import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService, DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LoginComponent } from './core/login/login.component';
// import { LoginFormComponent } from './core/login/login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DefaultComponent } from './layout/default.component';
import { SidebarComponent } from './components/sidebar/sidebar-nav/sidebar.component';
import { LoginFormComponent } from './modules/login-form/login-form.component';
import { GridLayoutModule, LayoutModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DefaultComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    DialogsModule,
    DateInputsModule,
    InputsModule,
    LabelModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    PopupModule,
    MatMenuModule
  ],
  exports:[MatSidenavModule, DialogsModule, PopupModule, MatMenuModule, LoginFormComponent],
 
  providers: [DialogService],
  entryComponents: [LoginFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
