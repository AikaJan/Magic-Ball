import React, { useState } from "react";
import "./EightBall.css";
import { answers } from "./answers";

const EightBall = () => {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  const style = { backgroundColor: answer.color };

  const handleClick = (e) => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer({
      msg: answers[randomIndex].msg,
      color: answers[randomIndex].color,
    });
  };

  return (
    <>
      <h1 className="h1"> EightBall </h1>

      <div className="EightBall" style={style} onClick={handleClick}>
        <p className="Answer"> {answer.msg} </p>
      </div>
    </>
  );
};

export default EightBall;
