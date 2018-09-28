import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// BrowserModule 이 포함함.
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { MemberModule } from './member/member.module';
// import { PlayerModule } from './player/player.module';
import { ShareModule } from './share/share.module';

// import { IntroComponent } from './component/intro/intro.component';
// import { HelloComponent } from './component/hello/hello.component';
// import { CoreTestComponent } from './component/core-test/core-test.component';
import { IntroComponent, HelloComponent, CoreTestComponent } from './component/index';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HelloComponent,
    CoreTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpModule, CoreModule.forRoot({ nickName: 'Happy' }),
    MemberModule,
    // PlayerModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule # constructor() called.');
  }
}

// MemberModule 을 임포트하면 라우팅로직까지 같이 추가해줌.

// PlayerModule 을 eager 로딩과 동시에 lazy 로딩방식으로
// 사용할 수 없습니다.
// Tip: lazy 로딩 방식을 테스트 서버가 제대로 변경감지하지 못합니다.
