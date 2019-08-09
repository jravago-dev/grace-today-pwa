import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

import { ScrollingModule } from '@angular/cdk/scrolling';

import { 
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,  
  MatDividerModule,
  MatSidenavModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSnackBarModule
  
 }
   from '@angular/material';
import { NavbarComponent } from './components/general/navbar/navbar.component';

import { SidebarComponent } from './components/general/sidebar/sidebar.component';

import { AboutComponent } from './components/about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ReadingCardComponent } from './components/general/reading-card/reading-card.component';
import { GraceDashboardComponent } from './components/grace-dashboard/grace-dashboard.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ReadingsListComponent } from './components/readings-list/readings-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    AboutComponent,
    SidebarComponent,    
    ReadingCardComponent,
    GraceDashboardComponent,
    ReferenceComponent,
    ReadingsListComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,    
    MatProgressBarModule,    
    MatMenuModule,
    MatSnackBarModule,
    ScrollingModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
