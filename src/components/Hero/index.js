import React from "react";
import Input from "@material-ui/core/Input";
import BorderButton from "../StyledButton/BorderButton";
import '../../style/style.css'


const Hero = () => {
    return (
        <div className="hero">
            <h1>Find a professional you can trust </h1>
            <div className="search-input">
                <Input placeholder={"Type service name..."} color={"secondary"}/>
            </div>
            <BorderButton classes={{ label: 'search-button' }} color={"secondary"}>SEARCH FOR PROFESSIONALS</BorderButton>
        </div>
    )
}
export default Hero
