import React from 'react'

import PropTypes from 'prop-types';
import Button from "../Button/Button";
import Body from "../Body/Body";
import Heading from "../Heading/Heading";
import Icon from "../Icon/Icon";
import './style.scss'

const Card = ({icon, title, bodyText, buttonText}) => {
  return (
    <div className="card">
      <div className="card__icon">
        <Icon icon={icon} />
      </div>
      <Heading className="card__title h4" level={3}>{title}</Heading>
      <Body className="card__body">{bodyText}</Body>
      <Button type="inline">{buttonText}</Button>
    </div>
  )
}

Card.propTypes = {	
  icon: PropTypes.string,
  title: PropTypes.string,
  bodyText: PropTypes.string,
  buttonText: PropTypes.string
};

Card.defaultProps = {
  buttonText: 'Learn More'
};

export default Card;