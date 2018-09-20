import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// const appRoutes: Routes = [
//   {path: 'home', component: HomeComponent},
//   {path: 'about', component: },
//   {path: 'experiments', component: },
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {path: '**',  component: HomeComponent}
// ];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, CommonModule, HttpModule, FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
