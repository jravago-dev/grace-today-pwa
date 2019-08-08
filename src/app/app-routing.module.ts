import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { VerseDashboardComponent } from './components/verse-dashboard/verse-dashboard.component';
import { CreditsComponent } from './components/general/credits/credits.component';


const routes: Routes = [ 
  {
    path: 'today', component: VerseDashboardComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'thanks', component: CreditsComponent
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
