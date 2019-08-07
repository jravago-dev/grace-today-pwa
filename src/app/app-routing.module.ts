import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { VerseDashboardComponent } from './components/verse-dashboard/verse-dashboard.component';


const routes: Routes = [ 
  {
    path: 'today', component: VerseDashboardComponent
  },
  {
    path: 'about', component: AboutComponent
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
