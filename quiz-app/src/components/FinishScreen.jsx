import React from "react";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <>
      <p className="result">
        You Scored <strong> {points} </strong> out of {maxPossiblePoints} (
        {percentage} %)
      </p>
      <p className="highscore">(Highscore : {highscore} points )</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
