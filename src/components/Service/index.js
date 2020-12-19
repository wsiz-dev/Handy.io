import React from "react";
import StyledButton from "../StyledButton";

const Service = (props) => {
    return (
        <div className={"service"}>
            <h2>{props.name}</h2>
            <p className={"service-info"}><span>Added: {props.added}</span><span>Phone Number: {props.phone}</span></p>
            <div>
                {props.description}
            </div>
        </div>
    )
}

export default Service
