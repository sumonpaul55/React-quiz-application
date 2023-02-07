import { isEqual } from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import Analysis from "../Analysis";
import Summery from "../Summery";

const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars

  const qna = location.state;
  const { loading, error, answers } = useAnswers(id);

  // console.log(answers);
  function calculate() {
    let score = 0;
    answers.forEach((question, questionIndex) => {
      // console.log(qna[questionIndex]);
      let correctIndex = [],
        checkedIndex = [];
      question.options.forEach((option, optionIndex) => {
        if (option.correct) correctIndex.push(optionIndex);
        if (qna[questionIndex].options[optionIndex].checked) {
          checkedIndex.push(optionIndex);
          // console.log(checkedIndex);
        }
      });
      if (-isEqual(correctIndex, checkedIndex)) {
        // if we need to check 2 array
        score = score + 5;
      }
    });
    return score;
  }
  const userScore = calculate();
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>There was an error</h3>}
      {answers && answers.length > 0 && (
        <>
          <Summery score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};

export default Result;
