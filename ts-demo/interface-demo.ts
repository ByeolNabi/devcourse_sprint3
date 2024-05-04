// 인터페이스
interface Student {
  stdId: number;
  stdName: string;
  age: number;
  gender: string;
  course: string;
  completed: boolean;
}

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "string",
    age: 100,
    gender: "female",
    course: "javascript",
    completed: true,
  };
}

console.log(getInfo(534));
