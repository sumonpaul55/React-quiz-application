import React from "react";
import Answer from "../Answer";
import ProgressBar from "../ProgressBar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer />
      <ProgressBar />
    </>
  );
};

export default Quiz;
