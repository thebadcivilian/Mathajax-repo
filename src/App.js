import "./App.css";
import { Route, Routes } from "react-router-dom";
import QuestionOne from "./components/QuestionOne";
import QuestionThree from "./components/QuestionThree";
import QuestionTwo from "./components/QuestionTwo";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<QuestionOne></QuestionOne>}></Route>
        <Route
          exact
          path="/questionTwo"
          element={<QuestionTwo></QuestionTwo>}
        ></Route>
        <Route
          exact
          path="/questionThree"
          element={<QuestionThree></QuestionThree>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
