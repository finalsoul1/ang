// Type을 명시하고 사용하는 JavaScript == TypeScript
var a = 10;
var b = 20;
var burger = 'hamburger', // String
calories = 300, // Numeric
tasty = true; // Boolean
// 함수를 만드는 개발자들이 좀더 고생하자
function add(a, b) {
    return a + b;
}
var result = add(2, 3);
console.log(result);
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
// 트랜스컴파일한 js파일은 만지면 안된다.
//# sourceMappingURL=1.js.map