import React from "react";

import PropTypes from "prop-types";
import {
  BeakerIcon,
  RefreshIcon,
  HomeIcon,
  CollectionIcon,
  ClockIcon,
  EmojiHappyIcon,
  TrendingUpIcon,
  MenuIcon,
  XIcon
} from "@heroicons/react/outline";
import "./style.scss";

const Icon = ({ icon, className }) => {
  const iconMap = {
    beaker: <BeakerIcon />,
    refresh: <RefreshIcon />,
    home: <HomeIcon />,
    collection: <CollectionIcon />,
    clock: <ClockIcon />,
    happy: <EmojiHappyIcon />,
    trending: <TrendingUpIcon />,
    ham: <MenuIcon />,
    close: <XIcon />
  };

  return <div className={`icon ${className ? className : ''}`}>{iconMap[icon]}</div>;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

Icon.defaultProps = {
  icon: "beaker"
};

export default Icon;
