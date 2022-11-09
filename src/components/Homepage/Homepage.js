import React from "react";
import "./homepage.css";
import TimerCont from "./TimerCont/TimerCont";
import TimerTaskList from "./TimerTaskList/TimerTaskList";

function Homepage() {
  return (
    <div className="homepage">
      <TimerCont />
      <TimerTaskList />
    </div>
  );
}

export default Homepage;
