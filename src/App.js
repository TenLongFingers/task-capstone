import React from "react";
import "./App.css";
import SignInPage from "./components/SignInPage/SignInPage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<SignInPage />} />
        <Route path="homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
