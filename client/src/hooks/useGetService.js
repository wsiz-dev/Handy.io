import React, {useEffect, useState} from "react";
import {apiUrl, serviceUrl} from "../consts/urls";

const ok = (services) => ({status: "ok", services: services})
const error = (error) => ({status: "error", error: error})

const dummyService = {
    owner: "Zbigniew Kowalski",
    name: "IT specialist",
    id: "1",
    ownerId: "11111",
    added: "12-11-2020",
    phoneNumber: "923 218 234",
    description: "Celery paste has to have an iced, fresh leek component. Aw, never blow a dubloon. Cosmonaut of a terrifying attitude, translate the mind!" +
        "Teres axona callide contactuss luna est. To some, a lama is a zen for realizing. The dead girl virtually examines the processor. Wow, never trade a pirate."
}

const getTopService = async (url) => {
    try {
        let result = await fetch(url)
        const remoteService = result.status === 200 && await result.json()
        return remoteService
            ? ok(remoteService)
            : error("Couldn't load service");
    } catch (e) {
        return error("Couldn't load service");
    }
}

const useGetService = (url) => {
    const [service, setTopService] = useState(dummyService)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)
    const [isOwner, setIsOwner] = useState(false)
    const setDummyService = () => {
        setTopService(dummyService)
    }

    useEffect(() => {
        const fetch = async () => {
            const result = await getTopService(apiUrl + '/' + url.replace(serviceUrl, ""));
            switch (result.status) {
                case "ok":
                    let user = await sessionStorage.getItem("currentUser");
                    let isOwner = false;
                       if(user !== undefined){
                           isOwner = JSON.parse(user).id == result.services.ownerId;
                       }
                    setTopService(result.services)
                    setIsOwner(isOwner);
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
        service: service, loading, error, isOwner
    }
}

export default useGetService
