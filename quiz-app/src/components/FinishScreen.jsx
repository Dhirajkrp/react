import React from "react";

function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <>
      <p className="result">
        You Scored <strong> {points} </strong> out of {maxPossiblePoints} (
        {percentage} %)
      </p>
      <p className="highscore">(Highscore : {highscore} points )</p>
    </>
  );
}

export default FinishScreen;
