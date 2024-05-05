// 열거형 (변수에 자동적으로 숫자가 저장된다.)
enum GenderType {
  Male = 324,
  Female,
  GenderNeutral = "Neutral",
}
// 인터페이스
interface Student {
  stdId: number;
  stdName: string;
  age: number;
  gender: GenderType;
  course: string;
  completed: boolean;
  //setName(name: string): void;
  setName: (name: string) => void;
  //getName: () => string;
}

// 인터페이스는 클래스를 만들 때 설계도가 되어줄 수 있다.
class MyStudent implements Student {
  stdId = 990709;
  stdName = "park";
  age = 30;
  gender = GenderType.Male;
  course = "node.js";
  completed = true;

  setName(name: string): void {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
}

const myInstance = new MyStudent();
myInstance.setName("엘리스");

// function getInfo(id: number): Student {
//   return {
//     stdId: id,
//     stdName: "string",
//     age: 100,
//     gender: "female",
//     course: "javascript",
//     completed: true,
//   };
// }
// console.log(getInfo(534));

// let std: Student = {
//   stdId: 990709,
//   stdName: "string",
//   age: 100,
//   gender: GenderType.Male,
//   course: "javascript",
//   completed: true,
// };

// function setInfo(student: Student): void {
//   console.log(student);
// }
// setInfo(std);
