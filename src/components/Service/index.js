import React from "react";

const Service = (props) => {

    return (<div className={"service"} onClick={props.onClick}>
            <h2>{props.name}</h2>
            <p className={"service-info"}><span>Added: {props.added}</span><span>Phone Number: {props.phone}</span>
            </p>
            <div>
                {props.description}
            </div>
        </div>
    )
}

export default Service
