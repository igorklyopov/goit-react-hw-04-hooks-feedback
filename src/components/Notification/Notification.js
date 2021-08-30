import PropTypes from "prop-types";
import style from "../Notification/Notification.module.css";

const Notification = ({ message }) => {
  return <p className={style.notificationMessage}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
