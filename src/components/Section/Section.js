import PropTypes from "prop-types";
import style from "../Section/Section.module.css";
import Container from "../Container/Container";

const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <Container>
        <h2 className={style.sectionTitle}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
