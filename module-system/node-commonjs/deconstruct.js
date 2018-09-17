let obj = {
  a: 10,
  b: 20,
  add: function (x, y) {
    console.log('sum = ', x + y);
  }
};

let b = 30;

// let a = obj.a;
// let add = obj.add;
// 아래 위가 같은 의미(해체 할당)
let {a, add} = obj;

add(a, b);