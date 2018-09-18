interface Food {
    name: string;
    calories: number;
}

function speak(food: Food): void { // 파라미터를 객체로 받을때 인터페이스를 이용)
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}

var ice_cream = {
  name: "ice cream",
  calories: 200
}

speak(ice_cream);
