import React from "react";
import '../../style/style.css'
import StyledButton from "../StyledButton";


const topServices = ["Service one", "Service two", "Service three", "Service four"]


//TODO: Get data from api
const TopServices = () => {
    return (
        <div className="top-services">
            <h2 color={"gray"} className="banner">Top services</h2>
            {
                topServices.map(service =>
                    <StyledButton className={"info-button"} color={"secondary"}>{service}</StyledButton>)
            }
        </div>
    )
}


export default TopServices;
