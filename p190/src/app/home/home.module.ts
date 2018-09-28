import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
  constructor(){
    console.log('HomeModule # constructor()');
  }
}

// 임포트한 ShareModule 이 먼저 객체화되고 HomeModule 이 만들어짐.
// 만약에 다른 모듈에서 이미 ShareModule 을 임포트 했다면
// 다시 ShareModule 객체를 만들지 않는다.
