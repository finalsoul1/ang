interface IGreeter {
  greet(): string;
}

class Greeter implements IGreeter {
  names: Array<any> = ['A', 'B'];
  greeting: any;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(): string { // 함수명(): 함수가 리턴할 자료형 표시
    return 'Hello, ' + this.greeting;
  }

  print(names: Array<any>): void {

  }
}

var greeter = new Greeter('Everybody');
console.log(greeter);

var result = greeter.greet();
console.log(result);
