import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
// import { LoginComponent } from './core/login/login.component';
import { DefaultComponent } from './layout/default.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LoginComponent,
    // canActivate: [MsalGuard],
    children: [
       
      // {
      //   path: 'entityVisible',
      //   component: EntitiesComponent,
      //   canActivate: [MsalGuard]
      // },
     
    ]
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
