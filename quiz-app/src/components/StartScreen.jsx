import React from "react";

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <>
      <h2>React quiz</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Let's Start
      </button>
    </>
  );
}
