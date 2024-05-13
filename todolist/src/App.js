"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
function App() {
    let name = "리액트";
    return (<div className="container">
      <h1 className="test">
        Hello {name === "리액트" ? <h1>YES</h1> : null}!!
      </h1>
      <p>반갑습니다.</p>
      <br />
      {/* 주석도 사용할 수 있다고 하네요... */}
      {
        // 주석도 사용할 수 있다고 하네요...
        }
    </div>);
}
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello, 리액트!!",
//     React.createElement("p", null, "반갑습니다.")
//   );
// }
exports.default = App;
