import PropTypes from "prop-types";
import style from "../Statistics/Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={`list ${style.statisticsList}`}>
      <li className={style.statisticsItem}>
        <span className={style.statisticsLabel}>Good: </span>
        <span className={style.statisticsValue}>{good}</span>
      </li>
      <li className={style.statisticsItem}>
        <span className={style.statisticsLabel}>Neutral: </span>
        <span className={style.statisticsValue}>{neutral}</span>
      </li>
      <li className={style.statisticsItem}>
        <span className={style.statisticsLabel}>Bad: </span>
        <span className={style.statisticsValue}>{bad}</span>
      </li>
      <li className={style.statisticsItem}>
        <span className={style.statisticsLabel}>Total: </span>
        <span className={style.statisticsValue}>{total}</span>
      </li>
      <li className={style.statisticsItem}>
        <span className={style.statisticsLabel}>Positive feedback: </span>
        <span className={style.statisticsValue}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
