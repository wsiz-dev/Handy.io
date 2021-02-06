import React, {useEffect, useState} from "react";
import {serviceUrl, apiUrl} from "../consts/urls";
import history from "../helpers/history";

const ok = (id) => ({status: "ok", id: id})
const error = (error) => ({status: "error", error: error})

const routeChange = (id) => {
    let path = serviceUrl + id;
    history.push(path);
    window.location.reload(false);
}

const post = async (service, url) => {
    try {
        let result = await fetch(url,
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
        const id = result.status === 200 && await result.json()
        return id
            ? ok(id)
            : error("Couldn't add service");
    } catch (e) {
        return error("Couldn't add service");
    }
}

const useAddService = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(undefined)
    const [body, setBody] = useState(undefined)

    const addService = async (service) => {
        setLoading(true);
        let user = await JSON.parse(sessionStorage.getItem("currentUser"))
        let body = {
            owner: user.name,
            ownerId:  parseInt(user.id),
            name: service.name,
            phoneNumber:service.phoneNumber,
            description: service.description
        }
        const result = await post(body, apiUrl + url);
        switch (result.status) {
            case "ok":
                routeChange(result.id)
                break;
            case "error":
                setError(result.error)
                setLoading(false);
                setBody(body);
                break;
        }
    }
    return {
        loading, error, addService, body
    }
}

export default useAddService
