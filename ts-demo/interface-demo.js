"use strict";
// 열거형 (변수에 자동적으로 숫자가 저장된다.)
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 324] = "Male";
    GenderType[GenderType["Female"] = 325] = "Female";
    GenderType["GenderNeutral"] = "Neutral";
})(GenderType || (GenderType = {}));
// 인터페이스는 클래스를 만들 때 설계도가 되어줄 수 있다.
class MyStudent {
    constructor() {
        this.stdId = 990709;
        this.stdName = "park";
        this.age = 30;
        this.gender = "male";
        this.course = "node.js";
        this.completed = true;
    }
    setName(name) {
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
