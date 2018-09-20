import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './binding/contact.component';
import { MyClickDirective } from './binding/my-click.directive';
import { OnewayStatementComponent } from './binding/oneway-statement.component';
import { TwowayComponent } from './binding/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MyClickDirective,
    OnewayStatementComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
