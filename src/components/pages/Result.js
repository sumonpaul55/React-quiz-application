import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import Analysis from "../Analysis";
import Summery from "../Summery";

const Result = () => {
  const { id } = useParams();
  const { qna } = useRef();
  console.log(qna);
  const { loading, error, answers } = useAnswers(id);
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>There was an error</h3>}
      {answers && answers.length > 0 && (
        <>
          <Summery />
          <Analysis />
        </>
      )}
    </>
  );
};

export default Result;
