import React from "react";
import Service from "../../components/Service";
import history from "../../helpers/history";
import useServices from "../../hooks/useServices";

const routeChange = (id) => {
    let path = "/service/" + id;
    history.push(path);
    console.log(path)
    window.location.reload(false);
}

const Services = (props) => {
    const {services, loading} = useServices(props.match.url);
    console.log(props.match.url)

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

export default Services
