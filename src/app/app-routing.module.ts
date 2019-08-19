import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

import { GraceDashboardComponent } from './components/grace-dashboard/grace-dashboard.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ReadingsListComponent } from './components/readings-list/readings-list.component';
import { LoginComponent } from './components/general/login/login.component';
import { RegistrationComponent } from './components/general/registration/registration.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [ 
  {
    path: '', component: GraceDashboardComponent
  },
  {
    path: 'readings', component: ReadingsListComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'thanks', component: ReferenceComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegistrationComponent
  },
  {
    path:'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
