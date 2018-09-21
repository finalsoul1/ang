import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myHidden]'
})
export class MyHiddenDirective {

  // ElementRef:
  // myHidden 을 속성으로 가지고 있는 엘리먼트를 참조있는
  // ElementRef 자료형의 객체
  // Renderer:
  // 엘리먼트를 조작할 때 사용하는 객체
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'display', 'none');
    // 네이티브 엘리먼트에 style="display:none" 라는 속성을 추가한다.
  }
}
