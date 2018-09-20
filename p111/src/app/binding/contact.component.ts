import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  // templateUrl: './contact.component.html',
  template: `
<div>
  <input #contactName type="text" placeholder="이름" />
</div>
<div>
  <input #contactTele type="text" placeholder="전화번호" />
</div>
<button (click)="handleClick(contactName.value, contactTele.value)">저장</button>
`,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() save: EventEmitter<any> = new EventEmitter();
  // 외부에 전달할때 씀

  constructor() { }

  ngOnInit() {
  }
  handleClick(name: string, tele: string): void {
    // save: 키 역할
    // { name: name, telephone: tele }: 전달되는 데이터
    // 부모 Component에게 전달
    this.save.next({ name: name, telephone: tele });
  }
}
