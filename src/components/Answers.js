import classes from "../Styels/answer.module.css";
const Answers = ({ options = [] }) => {
  return (
    <div className={classes.answers}>
      <label className={classes.answer} htmlFor="option1">
        A New Hope 1
      </label>
    </div>
  );
};

export default Answers;
