import { Component, OnInit } from '@angular/core';
import { ArrayService } from '../service/array.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public arrayservice: ArrayService) { }

  data: string = "무엇";

  datas = this.arrayservice.datas;

  doCount(): void {
    this.arrayservice.count++;
  }

  ngOnInit() {
  }

  input: string = "내용";

}
