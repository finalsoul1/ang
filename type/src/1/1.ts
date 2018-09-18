
// Type을 명시하고 사용하는 JavaScript == TypeScript
var a: number = 10;
var b = 20;

var burger: string = 'hamburger', // String
    calories: number = 300,  // Numeric
    tasty: boolean = true;   // Boolean

// 함수를 만드는 개발자들이 좀더 고생하자
function add(a: number, b: number) {
    return a + b;
}

var result = add(2, 3);
console.log(result)

function speak(food: string, energy: number): void {
    console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);

// 트랜스컴파일한 js파일은 만지면 안된다.
