// 변수에 데이터 타입 명시하기
let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 10;
let completed: boolean = false;

// 아래와 같은 타입들을 가지고 있는 object를 리턴하라
function getInfo(id: number): {
  stdId: number;
  stdName: string;
  age: number;
  conpleted: boolean;
} {
  return null;
}
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
function Plus(a: number, b: number): number {
  return a + b;
}
