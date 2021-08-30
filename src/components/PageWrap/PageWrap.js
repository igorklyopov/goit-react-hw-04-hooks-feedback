import styles from "../PageWrap/PageWrap.module.css";

const PageWrap = ({ title, children }) => {
  return (
    <div className={styles.pageWrap}>
      <h1 className={styles.mainTitle}>{title}</h1>
      {children}
    </div>
  );
};

export default PageWrap;
