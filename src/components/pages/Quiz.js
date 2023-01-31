import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import useQuestions from "../../Hooks/useQuestions";
import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reduce = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked = action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setcurrenQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reduce, initialState);
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerchange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Ther was an error</h3>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer options={qna[currentQuestion].options} handleAnswerchange={handleAnswerchange} />
          <ProgressBar />
          <Miniplayer />
        </>
      )}
    </>
  );
};

export default Quiz;
