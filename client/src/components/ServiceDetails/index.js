﻿import React from "react";
import useTopService from "../../hooks/useTopService";
import {Link as RouterLink, withRouter} from 'react-router-dom'


const ServiceDetails = (props) => {
    const {topService, loading} = useTopService(props.match.url);

    return (loading
            ? <div className={"service-details"}>
                <h2>Loading...</h2>
            </div>
            : <div className={"service-details"}>
                <RouterLink class="btn btn--link" to="/services"> &larr; Back to services</RouterLink>
                <h2>{topService.owner}</h2>
                <h3>{topService.name}</h3>
                <p className={"service-info"}>
                    <div className="added">Added: {topService.added}</div>
                    <div className="phone"><a className="btn btn--primary" href={'tel:' + topService.phoneNumber}>Click to call ({topService.phoneNumber})</a></div>
                </p>
                <p className={"service-description"}>{topService.description}</p>
            </div>
    )
}

export default ServiceDetails
