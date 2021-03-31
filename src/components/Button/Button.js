import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Button = ({children, type}) => {
  const typeButton = `button--${type}`;

  return <button className={`button ${typeButton}`}>{children}</button>;
};

Button.propTypes = {
  /**
   * Background Color
   */
  type: PropTypes.string,

  /**
   * Id of button need to pass to link
   */
  id: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
