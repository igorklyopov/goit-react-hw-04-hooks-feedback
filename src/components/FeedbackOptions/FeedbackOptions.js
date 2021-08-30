import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.feedbackBtnsWrap}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={style.feedbackBtn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
