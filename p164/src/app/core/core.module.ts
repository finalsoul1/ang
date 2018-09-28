import { NgModule, SkipSelf, Optional, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title.component';

import { UserService, UserServiceConfig } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],

  exports: [TitleComponent],

  declarations: [TitleComponent],
  providers: [UserService]
})
// UserServiceConfig 는 서비스가 아니기 때문에 providers 에 추가 안해도 됨.
// exports: [TitleComponent]:
// 코어 모듈이 가지고 있는 TitleComponent 를
// 이 모듈을 임포트 하는 모듈에서 직접 selector 를 설정하여
// 사용할 수 있게 만듭니다.
// 원래 모듈간은 블록이다.

export class CoreModule {

  // 부모 주입기에 CoreModule 이 존재하는지 체크하기 위해서 @SkipSelf 를 사용합니다.
  // @Optional 데코레이터는 객체가 있으면 전달하고 없으면 null 을 전달하게 합니다.
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    console.log('CoreModule # constructor() called.');
    if (parentModule) {
      // 코어 모듈은 전체 모듈이 공유해서 언제나 사용하는 기능을 가진 모듈입니다.
      // 코어 모듈은 하나만 존재하면 됩니다. 코어 모듈은 루트 모듈이 임포트해서 사용하는 방식입니다.
      throw new Error('CoreModule 이 이미 로딩되었습니다.');
    }
  }
  // 일종의 방어기재, CoreModule 을 하나 더 받지 말라는 코딩.

  // { nickName: 'Happy' } 입력받음
  static forRoot(config: UserServiceConfig): ModuleWithProviders {

    // CoreModule 모듈을 리턴해야 합니다.
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
        // UserServiceConfig 를 달라고 할 때, config 를 줘라.
      ]
      // CoreModule 자료형의 객체를 사용할 때 대신,
      // providers 가 가진 값을 사용합니다.
    };
  }
}


// 여러명이 공동작업할때는 모듈이 분리될 수 밖에 없음.
