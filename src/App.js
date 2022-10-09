import "./App.css";
import TaskBank from "./components/TaskBank/TaskBank";
import TimerCont from "./components/TimerCont/TimerCont";

function App() {
  return (
    <div className="App">
      <h1>This is the app</h1>
      <TimerCont />
      <TaskBank />
    </div>
  );
}

export default App;
