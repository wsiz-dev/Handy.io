import React, {useEffect, useState} from "react";
import {servicesUrl, apiUrl} from "../consts/urls";
import history from "../helpers/history";

const ok = (id) => ({status: "ok", id: id})
const error = (error) => ({status: "error", error: error})

const post = async (service, url) => {
    try {
       let result = await fetch(url, {
            method: 'post',
            body: service,
        })
        const id = result.status === 201 && await result.json()
        return id
            ? ok(id)
            : error("Couldn't add service");
    }
    catch (e){
        return error("Couldn't add service");
    }
}

const useAddService = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(undefined)

    const addService = async (service) => {
        setLoading(true);
        const result = await post(service, apiUrl + url);
        switch (result.status) {
            case "ok":
                history.push(servicesUrl + '/' + result.id);
                break;
            case "error":
                setError(result.error)
                setLoading(false);
                break;
        }
    }
    return {
        loading, error, addService
    }
}

export default useAddService
