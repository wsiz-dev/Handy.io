import React from "react";

const Service = (props) => {

    return (<div className={"service"} onClick={props.onClick}>
            <div className="service__header">
                <h2>{props.name}</h2>
                <p className={"service-info"}>
                    <span className="added">Added: {props.added}</span>
                    <span className="phone">Phone: <a href={'tel:' + props.phone}><b>{props.phone}</b></a></span>
                </p>
            </div>
            <div className="service__body">
                <div className="left">
                {props.description}
                </div>
                <div className="right">
                    <button className="btn btn--secondary">Get details</button>
                </div>
            </div>
        </div>
    )
}

export default Service
