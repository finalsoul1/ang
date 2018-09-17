// const service = require('./service');
// 
// console.log(service);
// // { add: [Function: add], say: [Function: say] }
// 
// console.log(service.add(2, 3));
// console.log(service.say('John'));

const {add, say} = require('./service');


// service. 찍을 필요 없이 바로 사용가능
console.log(add(2, 3));
console.log(say('John'));