import React, { Component } from "react";
import "./styles.css";

const Wrapper = (props) => {

    return(
    <div className="wrapper">{props.children}</div>

    )


}

export default Wrapper