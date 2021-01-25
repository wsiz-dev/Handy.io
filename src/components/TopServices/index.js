import '../../style/style.css'
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
                {
                    getLoadingItems()
                }
            </div>
            : <div className="top-services">
                <h2 color={"gray"} className="banner">Top services</h2>
                    {
                        topServices.map(service =>
                            <StyledButton className={"info-button"} color={"secondary"} onClick={() => routeChange(service.id)}>
                                <div>{service.owner}<p>{service.name}</p></div>
                            </StyledButton>)
                    }
            </div>
    )
}
export default TopServices;
