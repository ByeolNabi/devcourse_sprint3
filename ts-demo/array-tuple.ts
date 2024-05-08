let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["애플", "바나나", "오렌지"];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let mixedArray: (number | string)[] = [1, "two", 3, "four"];
for (let i = 0; i < mixedArray.length; i++) {
  console.log(mixedArray[i]);
}

// 튜플 : 타입의 순서가 정해져있다. (클래스나 구조체 아닌가...?)
let greeting: [number, string, boolean] = [200, "tup", true];

// Spread 연산자
let firstArray = [1, 2, 3, "first end"];
let secondArray = [4, 5, 6, "second end"];
let combineArray = [...firstArray, ...secondArray];

for (let i = 0; i < combineArray.length; i++) {
  console.log(combineArray[i]);
}
