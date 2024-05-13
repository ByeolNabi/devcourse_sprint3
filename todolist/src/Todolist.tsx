import React, { useState } from "react";
import { Button } from "react-bootstrap";

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

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div>
          <input
            placeholder="할 일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <Button variant="warning" onClick={addTodo}>
            추가
          </Button>
        </div>
        <p></p>
        <div className="board">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}
                ></input>
                <span>
                  {todo.isChecked ? (
                    <del>{todo.text}</del>
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
