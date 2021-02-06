import React from "react";
import Service from "../../components/Service";
import history from "../../helpers/history";
import useMyServices from "../../hooks/useMyServices";
import {servicesUrl} from "../../consts/urls";

const routeChange = (id) => {
    let path = "/service/" + id;
    history.push(path);
    window.location.reload(false);
}

const MyServices = (props) => {
    const {services, loading} = useMyServices(props.match.url.replace(servicesUrl, ""));

    return ( loading
        ? <Service name={"Loading..."}/>
        : <div>
            {services.map(service =>
                <Service name={service.name}
                         added={service.added}
                         phone={service.phoneNumber}
                         description={service.description}
                         onClick={() => routeChange(service.id)}/>)}
        </div>
    )
}

export default MyServices
