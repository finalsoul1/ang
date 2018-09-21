import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  template: `
    <h1>Welcome</h1>
    <h1 myHidden>Hidden Welcome</h1>
    <hr>
    <div>
      <input type="text" placeholder="name">
    </div>
    <br>
    <div>
      <input type="email" placeholder="email" myHighlight>
    </div>
    <br>
    <div>
      <input type="tel" placeholder="tel" myHighlight>
    </div>
  `,
  styles: []
})
export class CustomDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
