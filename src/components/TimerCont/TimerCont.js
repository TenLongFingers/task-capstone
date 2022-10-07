import React from "react";
import "./TimerContcss/TimerCont.css";
import RestTimer from "./RestTimer";
import SetRestTimerBtn from "./SetRestTimerBtn";
import SetWorkTimerBtn from "./SetWorkTimeBtn";
import StartSessionBtn from "./StartSessionBtn";
import WorkTimer from "./WorkTimer";

function TimerCont() {
  return (
    <div className="timer-container">
      <p>Timer here</p>
      <WorkTimer />
      <SetWorkTimerBtn />
      <RestTimer />
      <SetRestTimerBtn />
      <StartSessionBtn />
    </div>
  );
}

export default TimerCont;
