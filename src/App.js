import "./App.css";
import TimerCont from "./components/TimerCont/TimerCont";
import TaskBank from "./components/TaskBank/TaskBank";
import TimerTaskList from "./components/TimerTaskList/TimerTaskList";

function App() {
  return (
    <div className="App">
      <h1>This is the app</h1>
      <TimerCont />
      <TimerTaskList />
      <TaskBank />
    </div>
  );
}

export default App;
