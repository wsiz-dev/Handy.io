import React from "react";
import Input from "@material-ui/core/Input";
import StyledButton from "../StyledButton";
import '../../style/style.css'


const Hero = () => {
    return (
        <div className="hero">
            <h1>Find a professional you can trust </h1>
            <Input className={"input"} placeholder={"Type service name..."} color={"secondary"}/>
            <StyledButton classes={{ label: 'search-button' }} color={"secondary"}>SEARCH FOR PROFESSIONALS</StyledButton>
        </div>
    )
}
export default Hero
