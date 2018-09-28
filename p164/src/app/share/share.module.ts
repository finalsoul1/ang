import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { MyUpperPipe } from './my-upper.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MyUpperPipe,
    HighlightDirective,
    CommonModule,
    FormsModule
  ],
  declarations: [HighlightDirective, MyUpperPipe]
})
export class ShareModule { }

// CommonModule, FormsModule 을 exports 하는 이유:
// 공유 모듈에서 CommonModule, FormsModule 을 exports 하면,
// 공유 모듈을 임포트하는 특징 모듈에서
// 일일이 임포트 하지 않아도 사용할 수 있게 된다.
