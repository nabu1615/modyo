import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Heading = ({ className = "", children, level }) => {
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag className={className}>{children}</HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
