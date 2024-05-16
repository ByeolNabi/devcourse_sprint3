import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "✅ 오늘 할 일 ✅";

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "코딩하기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
    { id: 4, text: "캡스톤 화이팅", isChecked: false },
  ]);

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <p></p>
      <div className="container">
        <div className="board">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
