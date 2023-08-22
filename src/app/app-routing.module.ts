import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
// import { LoginComponent } from './core/login/login.component';
import { DefaultComponent } from './layout/default.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  {
    path:'default',
    component:DefaultComponent
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  /* {
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
  }, */
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
