import { Component, OnInit } from '@angular/core';
import { HelloService } from '../service/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;

  // 누군지 알게끔 자료형을 명기해주고 임포트함
  constructor(private helloservice: HelloService) { }

  ngOnInit() {
    this.title = this.helloservice.getTitle();
  }

}
