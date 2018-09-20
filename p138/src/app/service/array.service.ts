import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  datas: Object[] = [
    {eng: "genius", han: "천재"},
    {eng: "idiot", han: "바보"}
  ];

  count: number = 0;

  constructor() { }
}
