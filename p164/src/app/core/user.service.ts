import { Injectable, Optional } from '@angular/core';

// 원래 JS는 한 파일에 다 때려박는 랭귀지다.
// 두 class 가 밀접한 연관관계일때, 한 파일로 쓸 수 있다.

export class UserServiceConfig {
  nickName = '';
}

@Injectable(
  // {
  // providedIn: 'root'
  // }
)

export class UserService {
  private _nickName = '';

  // @Optional
  // 해달 파라미터는 반드시 주입하지 않아도 괜찮다는 뜻 입니다.
  // 서비스가 생성자 주입을 받고자 한다면, @Injectable 설정이 필수가 됩니다.
  constructor(@Optional() config: UserServiceConfig) {
    if (config) {
      this._nickName = config.nickName;
    }
  }
  get nickName() {
    return this._nickName;
  }
}
