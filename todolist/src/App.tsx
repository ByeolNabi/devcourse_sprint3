import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";
import TodoList from "./Todolist";
import MapTest from "./MapTest";
import Timer from "./Timer";
import Clock from "./Clock";
import MyWeather from "./MyWeather";
import TodoModal from './TodoModal';

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
      <MyWeather weather = '완전 엄청 맑아요'>안녕하세요</MyWeather>
    </div>
  );
}

export default App;
