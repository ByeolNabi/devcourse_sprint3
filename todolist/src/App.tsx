import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";

function App() {
  let name = "리액트";

  return (
    <div className="container">
      <ClassCom></ClassCom>
      <FuncCom></FuncCom>
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
