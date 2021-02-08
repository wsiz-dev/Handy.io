﻿import '../../style/style.css'
import StyledButton from "../StyledButton";
import useTopServices from "../../hooks/useTopServices";
import React from 'react';
import history from "../../helpers/history";

const TopServices = () => {
    const {topServices, loading} = useTopServices();

    const routeChange = (id) => {
        let path = "/service/" + id;
        history.push(path);
        window.location.reload(false);
    }

    const getLoadingItems = () => {
        let loadingItems = [];
        for (let i = 0; i < 4; i++) {
            loadingItems.push(<StyledButton className={"info-button"} color={"secondary"}>Loading...</StyledButton>)
        }
        return loadingItems;
    }

    return (
        loading
            ? <div className="top-services">
                <h2 color={"gray"} className="banner">Top services</h2>
                <div className="top-services__wrapper">
                {
                    getLoadingItems()
                }
                </div>
            </div>
            : <div className="top-services">
                <h2>Top services</h2>
                <div className="top-services__wrapper">
                    {
                        topServices.map(service =>
                            <button onClick={() => routeChange(service.id)}>
                                <div>
                                <span className="owner">{service.owner}</span>
                                <span className="name">{service.name}</span>
                                </div>
                            </button>)
                    }
                </div>
            </div>
    )
}
export default TopServices;
