import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

// import { DataShareService } from './share/data-share.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule # constructor()');
  }
}

// 임포트한 순서대로 만들어지고 AppModule 이 제일 나중에 만들어짐
// 모듈 객체는 한번 생성되면 계속 유지한다. 새로만들어지지않음.
// 컴포넌트는 1회용
// 리프레쉬할때 모듈 객체 새로 만듦.
