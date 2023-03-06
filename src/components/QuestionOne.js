import React from "react";
import { MathJax } from "better-react-mathjax";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function QuestionOne() {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  async function getData() {
    axios
      .get(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_901`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }

  console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data.map((ques, i) => {
        return (
          <div key={i}>
            <h1>Topic-{ques.ChapterID}</h1>
            <MathJax>{ques.Question}</MathJax>
            <div style={{ marginTop: "20px" }}>
              <Link to="/questionTwo">Next Question</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuestionOne;
