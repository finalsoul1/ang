var a = 0;
function f() {
  var a = 1;
  function e() {
    var a = 2;
    console.log(a);
  }
  e();
  console.log(a);
}
f();
console.log(a);

// 함수스코프는 var여도 따로 구분함
console.log('------------1------------');


function getFunc() {
  var a1 = 7;
  return function(b1) {
    console.log(a1 + b1);
  }
}6
var f = getFunc(); // ()로 호출했기 때문에 function이 호출
f(5); // 클로져스코프로 변수 a1까지 묶어서 저장함
console.log('------------2------------');

var myObj = {a:1, b:2, c:3};

var {a, c} = myObj;
console.log('객체 해체할당 a = ' + a);
console.log('객체 해체할당 c = ' + c);

var array = [1, 2, 3];

var [x1, , x3] = array;
console.log('배열 해체할당 a = ' + x1);
console.log('배열 해체할당 c = ' + x3);
