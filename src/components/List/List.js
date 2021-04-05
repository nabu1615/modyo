import React from "react";

import {
    CheckIcon
  } from "@heroicons/react/solid";
import './style.scss';

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => {
        return <li key={`list-item-${index}`} className="list__item">
            <CheckIcon />
            {item}
            </li>;
      })}
    </ul>
  );
};

export default List;
