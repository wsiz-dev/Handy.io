import React from "react";
import useTopService from "../../hooks/useTopService";


const ServiceDetails = (props) => {
    const {topService, loading} = useTopService(props.match.url);

    return (loading
            ? <div className={"service-details"}>
                <h2>Loading...</h2>
            </div>
            : <div className={"service-details"}>
                <h2>{topService.owner}</h2>
                <h3>{topService.name}</h3>
                <div className={"service-info"}>
                    <span>Added: {topService.added}</span><span>Phone Number: {topService.phoneNumber}</span>
                    <p className={"service-description"}>{topService.description}</p>
                </div>
            </div>
    )
}

export default ServiceDetails
