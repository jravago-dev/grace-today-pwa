import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

import { GraceDashboardComponent } from './components/grace-dashboard/grace-dashboard.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ReadingsListComponent } from './components/readings-list/readings-list.component';


const routes: Routes = [ 
  {
    path: 'today', component: GraceDashboardComponent
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
    path: '',
    redirectTo: '/today',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
