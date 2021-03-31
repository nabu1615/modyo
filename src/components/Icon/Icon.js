import React from "react";

import PropTypes from "prop-types";
import {
  BeakerIcon,
  RefreshIcon,
  HomeIcon,
  CollectionIcon,
  ClockIcon,
  EmojiHappyIcon,
  TrendingUpIcon
} from "@heroicons/react/outline";
import "./style.scss";

const Icon = ({ icon }) => {
  const iconMap = {
    beaker: <BeakerIcon />,
    refresh: <RefreshIcon />,
    home: <HomeIcon />,
    collection: <CollectionIcon />,
    clock: <ClockIcon />,
    happy: <EmojiHappyIcon />,
    trending: <TrendingUpIcon />
  };

  return <div className="icon">{iconMap[icon]}</div>;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

Icon.defaultProps = {
  icon: "beaker",
};

export default Icon;
