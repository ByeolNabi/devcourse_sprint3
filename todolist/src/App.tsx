import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";
import TodoList from "./Todolist";
import MapTest from "./MapTest";

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
    </div>
  );
}

// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello, 리액트!!",
//     React.createElement("p", null, "반갑습니다.")
//   );
// }

export default App;
