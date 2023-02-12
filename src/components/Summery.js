import React, { useMemo } from "react";
import successImg from "../assets/images/success.png";
import useFetch from "../Hooks/useFetch";
import classes from "../Styels/summery.module.css";

const Summery = ({ score, noq }) => {
  const getImgkeyword = useMemo(() => {
    console.log("rendered");
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);
  const { loading, error, result } = useFetch(`https://api.pexels.com/v1/search?query=${getImgkeyword}&per_page=1`, "GET", {
    Authorization: process.env.REACt_APP_PIXELS_API_KEY,
  });
  const ResultImg = result ? result?.photos[0].src.medium : successImg;
  const appreciate = () => {
    switch (getImgkeyword) {
      case "failed":
        return "You have to learn more";
      case "good":
        return "Good but learn more";
      case "very good":
        return "Very good go ahead";
      default:
        return "Excellent You have learnt";
    }
  };
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <h3 className={classes.score}>
          {appreciate()}
          <br />
          {score} out of {noq * 5}
        </h3>
      </div>

      {loading && <h5> Your badge is Loading...</h5>}
      {error && <h5> En error ocured !</h5>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={ResultImg} alt="Success" />
        </div>
      )}
    </div>
  );
};

export default Summery;
