import React from "react";
import "./style.scss";

const Body = ({ children, className='' }) => {
    return (
        <p className={`body ${className}`}>{children}</p>
    )
}

export default Body;