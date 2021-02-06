import React, {useEffect, useState} from "react";
import {topServicesUrl, apiUrl} from "../consts/urls";

const ok = (services) => ({status: "ok", services: services})
const error = (error) => ({status: "error", error: error})

const getTopServices = async () => {
    const localServices = localStorage.getItem("dummyService");
    if (localServices) {
        return ok(JSON.parse(localServices));
    }
    try {
        let url = apiUrl + topServicesUrl + '/4';
        let result = await fetch(url)
        const remoteServices = result.status === 200 && await result.json()
        remoteServices && localStorage.setItem("topServices", JSON.stringify(remoteServices));
        return remoteServices
            ? ok(remoteServices)
            : error("Couldn't load services");
    }
    catch (e){
        return error("Couldn't load services");
    }
}

const useTopServices = () => {
    const [topServices, setTopServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)
    const setDummyService = () => {
        let dummyServices = [
            {owner: "Zbigniew Kowalski", name: "IT specialist", id: "1"},
            {owner: "Edmund Borkowski", name: "Bricklayer", id: "2"},
            {owner: "Joachim Misiewicz", name: "Plasterer", id: "3"},
            {owner: "Jarosław Anonimowicz", name: "Acrobat", id: "4"}
        ]

        localStorage.setItem("topServices", JSON.stringify(dummyServices))
        setTopServices(dummyServices)
    }

    useEffect(() => {
        const fetch = async () => {
            const result = await getTopServices();
            switch (result.status) {
                case "ok":
                    setTopServices(result.services)
                    break;
                case "error":
                    //TODO: Remove this when API will be created
                    setDummyService()
                    setError(result.error)
                    break;
            }
        }
        fetch().then(() => setLoading(false));
    }, []);

    return {
        topServices, loading, error
    }
}

export default useTopServices
