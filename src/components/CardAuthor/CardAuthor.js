import React from "react";

import PropTypes from "prop-types";

import Body from "../Body/Body";
import avatar from "../../assets/images/avatar.jpg";
import "./style.scss";

const CardAuthor = ({ imageUrl, imageAlt, name, role, quote }) => {
  return (
    <div className="card-author">
      <div className="card-author__header">
        <img className="card-author__image" src={imageUrl} alt={imageAlt} />
        <div className="card-author__info">
          <strong className="card-author__name">{name}</strong>
          <span className="card-author__role">{role}</span>
        </div>
      </div>
      <Body className="card-author__body">“{quote}”</Body>
    </div>
  );
};

CardAuthor.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};

CardAuthor.defaultProps = {
  imageUrl: avatar,
};

export default CardAuthor;
