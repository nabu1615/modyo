import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Button = ({children, type, className}) => {
  const typeButton = `button--${type}`;

  return <button className={`button ${typeButton} ${className}`}>{children}</button>;
};

Button.propTypes = {
  /**
   * Background Color
   */
  type: PropTypes.string,
  className: PropTypes.string,

  /**
   * Id of button need to pass to link
   */
  id: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
  className: ''
};

export default Button;
