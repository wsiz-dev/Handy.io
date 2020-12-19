import React from "react";
import Service from "../../components/Service";

const services = [
    {
        name: "Service one",
        added: "23.12.2020",
        phone: "232 321 432",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus blanditiis consequatur debitis dicta eaque eligendi expedita facere inventore labore nihil non omnis, optio placeat sequi sint vitae. Magni, nisi!"
    },
    {
        name: "Service one",
        added: "23.12.2020",
        phone: "232 321 432",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus blanditiis consequatur debitis dicta eaque eligendi expedita facere inventore labore nihil non omnis, optio placeat sequi sint vitae. Magni, nisi!"
    }]

const Services = () => {
    return (
        <div>
            {services.map(service => <Service name={service.name} added={service.added} phone={service.phone} description={service.description}/>)}
        </div>
    )
}

export default Services
