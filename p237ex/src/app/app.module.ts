import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

import { StudentHttpService } from './student/service/student.http.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [StudentHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
