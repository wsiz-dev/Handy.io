import React from "react";
import {Link as RouterLink, withRouter} from 'react-router-dom'
import useGetService from "../../hooks/useGetService";


const ServiceDetails = (props) => {
    const {service, loading} = useGetService(props.match.url);

    return (loading
            ? <div className={"service-details"}>
                <h2>Loading...</h2>
            </div>
            : <div className={"service-details"}>
                <RouterLink class="btn btn--link" to="/services"> &larr; Back to services</RouterLink>
                <h2>{service.owner}</h2>
                <h3>{service.name}</h3>
                <p className={"service-info"}>
                    <div className="added">Added: {service.added}</div>
                    <div className="phone"><a className="btn btn--primary" href={'tel:' + service.phoneNumber}>Click to call ({service.phoneNumber})</a></div>
                </p>
                <p className={"service-description"}>{service.description}</p>
            </div>
    )
}

export default ServiceDetails
