import "./App.css";

function App() {
  let name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "48px",
    funtWeight: "bold",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h1 className="test">
        Hello {name === "리액트" ? <h1>YES</h1> : null}!!
      </h1>
      <p>반갑습니다.</p>
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
