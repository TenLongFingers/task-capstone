import React from "react";
import SignInPage from "./components/SignInPage/SignInPage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route index element={<SignInPage />} />
        <Route path="homepage" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default App;
