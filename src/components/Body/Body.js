import React from "react";
import "./style.scss";

const Body = ({ children }) => {
    return (
        <p className="body">{children}</p>
    )
}

export default Body;