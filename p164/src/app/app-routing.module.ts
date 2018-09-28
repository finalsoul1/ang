import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreTestComponent, HelloComponent, IntroComponent } from './component/index';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'core-test', component: CoreTestComponent },
  { path: 'lazy/player', loadChildren: '../app/player/player.module#PlayerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: 'lazy/plyaer', loadChildren: '../app/player/player.module#PlayerModule' }
// { path: URL문자열, loadChildren: '../app/모듈패스/모듈파일명#모듈클래스' }
// 모듈을 lazy(필요할 때 처리) 로딩방식으로 사용하는 방법
// URL로 접근하면 처리.
//
