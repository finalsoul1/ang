import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpopComponent } from './kpop/kpop.component';

import { KpopHttpService } from './kpop/kpop-http.service';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    KpopComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpModule, FormsModule, HttpClientModule
  ],
  providers: [KpopHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
