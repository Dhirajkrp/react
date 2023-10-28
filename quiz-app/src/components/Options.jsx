import React from "react";

export default function Options({ question, dispatch, answer }) {
  const hasAnswwerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""}
          ${
            hasAnswwerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
          `}
          disabled={hasAnswwerd}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
