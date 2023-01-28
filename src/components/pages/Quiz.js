import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import useQuestion from "../../Hooks/useQuestions";
import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";

let initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "question":
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
  const { loading, error, questions } = useQuestion(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "question",
      value: questions,
    });
  }, [questions]);

  function handleAnswerchange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There was an error</h2>}
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
