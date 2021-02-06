import React, {useEffect, useState} from "react";
import {servicesUrl} from "../consts/urls";

const ok = (services) => ({status: "ok", services: services})
const error = (error) => ({status: "error", error: error})

const getServices = async (phrase) => {
    try {
        let result = await fetch(servicesUrl + "/" + phrase)
        const services = result.status === 200 && await result.json()
        return services
            ? ok(services)
            : error("Couldn't load services");
    }
    catch (e){
        return error("Couldn't load services");
    }
}

const useServices = (phrase) => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    const setDummyServices = () => {
        let dummyServices = [
            {name: "IT specialist", id: "1", added: "23-12-2020", phoneNumber: "321 234 123", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ac"},
            {name: "Bricklayer", id: "2", added: "23-12-2020", phoneNumber: "321 234 123", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus blanditiis consequatur debitis dicta eaque eligendi expedita facere inventore labore nihil non omnis, optio placeat sequi sint vitae. Magni, nisi!"},
            {name: "Plasterer", id: "3", added: "23-12-2020", phoneNumber: "321 234 123", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus blanditiis consequatur debitis dicta eaque eligendi expedita facere inventore labore nihil non omnis, optio placeat sequi sint vitae. Magni, nisi!"},
            {name: "Acrobat", id: "4", added: "23-12-2020", phoneNumber: "321 234 123", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus blanditiis consequatur debitis dicta eaque eligendi expedita facere inventore labore nihil non omnis, optio placeat sequi sint vitae. Magni, nisi!"}
        ]
        setServices(dummyServices)

    }
    const fetchData = async () => {
        setLoading(true);
        const result = await getServices(phrase);
        switch (result.status) {
            case "ok":
                setServices(result.services)
                break;
            case "error":
                //TODO: Remove this when API will be created
                await setDummyServices()
                setError(result.error)
                break;
        }
    }

    useEffect(() => {
        fetchData().then(() => setLoading(false));
    }, []);

    return {
        services, loading, error, fetchData
    }
}

export default useServices
