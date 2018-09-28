import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  private el: HTMLElement;
  
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.style.fontSize = "30px";
  }

  // 지정된 영역에 마우스가 들어오면
  @HostListener('mousemove')
  onMouseMove() {
    this.el.style.backgroundColor = "blue";
    this.el.style.color = "white";
  }

  // 마우스가 나가면
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.style.backgroundColor = null;
    this.el.style.color = "black";
  }
}
