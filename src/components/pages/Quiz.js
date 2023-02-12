import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
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
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
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
  // handle when the user clicks on the next button to go the next question
  function nextQuestion() {
    if (currentQuestion < questions.length) {
      setcurrenQuestion((prevQuestion) => prevQuestion + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setcurrenQuestion((prevQuestion) => prevQuestion - 1);
    }
  }
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    navigate(`/result/${id}`, { state: qna });
  }
  // calculate for progress bar
  const parcentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Ther was an error</h3>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer input={true} options={qna[currentQuestion].options} handleAnswerchange={handleAnswerchange} />
          <ProgressBar next={nextQuestion} prev={prevQuestion} progressparcent={parcentage} submit={submit} />
          <Miniplayer id={id} title={state.videoTitle} />
        </>
      )}
    </>
  );
};
export default Quiz;
