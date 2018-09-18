define("calc", [], function() {
  var sum = function(x, y) {
    return x + y;
  };

  var sub = function (x, y) {
    return x - y;
  };

  return {
    getSum: function (a, b) {
      return sum(a, b);
    },
    getSub: function (a, b) {
      return sub(a, b);
    }
  };
});
