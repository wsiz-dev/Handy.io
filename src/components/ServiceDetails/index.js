import React from "react";

const ServiceDetails = (props) => {
    return (
        <div className={"service-details"}>
            <h1>{props.name}</h1>
            <div className={"service-info"}>
                <p>Added: {props.added}</p>
                <p>Phone Number: {props.phone}</p>
            </div>
            <div>
                {props.description}
            </div>
        </div>
    )
}

export default ServiceDetails
