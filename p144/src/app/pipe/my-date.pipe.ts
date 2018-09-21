import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  // {{strDate | myDate:'.'}}
  // ? : 파라미터를 받을수도 있고 안받을 수도 있다.
  transform(value: string, exponent?: any): any {
    if (!exponent) {
      exponent = '-';
    }
    if (value.length == 8) {
      return value.substring(0, 4) + exponent +
        value.substring(4, 6) + exponent +
        value.substring(6, 8);
    } else {
      return value;
    }
  }

}
