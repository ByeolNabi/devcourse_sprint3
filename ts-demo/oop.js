"use strict";
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
class Employee {
    constructor(empName, age, empJob) {
        this.printEmp = () => {
            console.log(this._empName +
                "의 나이는" +
                this._age +
                "이고, 직업은" +
                this._empJob +
                "입니다.");
        };
        this._empName = empName;
        this._age = age;
        this._empJob = empJob;
    }
    // private에 접근하기 위한 인터페이스(함수)를 만들어 주는 것이 인지상정
    // get set
    get empName() {
        return this._empName;
    }
    set empName(val) {
        this._empName = val;
    }
}
let employee1 = new Employee("kim", 30, "개발잡니다.");
employee1.printEmp();
// 클래스 안에 있는 변수는 캡슐화 시키는 것이 평범하다.
