import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
@Directive({
  selector: '[myClick]'
})
export class MyClickDirective {
  toggle = false;

  // @Output(): 키 값은 = clicks
  // @Output('myClick'): 키 값은 = myClick
  // 키 값을 바꾸고 싶을때 직접 입력
  @Output('myClick') clicks = new EventEmitter<boolean>();

  // ElementRef:
  // myClick 을 속성으로 가지고 있는 엘리먼트를 참조하는 객체
  // el.nativeElement
  // 실제 엘리먼트의 참조를 가리킨다.
  constructor(el: ElementRef) {
    // 이 밑으로 순수 JS코드를 작성 가능하다
    // addEventListener: 'click' 이벤트가 발생하면 콜백함수를 호출
    // 버튼에 클릭 이벤트리스너를 장착한다.
    el.nativeElement.addEventListener('click', (event: Event) => {
      console.log(event);
      this.toggle = !this.toggle;
      // emit 함수는 next 함수의 구버전이다.
      this.clicks.emit(this.toggle ? true : false);
    });
  }
}
// 디렉티브는 커스텀 속성이다
