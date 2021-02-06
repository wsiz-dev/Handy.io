import React, {useEffect, useState} from "react";
import Link from "@material-ui/core/Link"
import '../../style/style.css'
import withStyles from "@material-ui/core/styles/withStyles"
import {Link as RouterLink, withRouter} from 'react-router-dom'
import Logout from "../Logout";
import logo from "../../logo.svg";

const StyledLink = withStyles({
    root: {
        // width: '16rem',
        // margin: '0 3vw',
    },
})(Link);


const Header = () => {
    const [isLogged, setLogged] = useState(false);
    useEffect(() => {
        let user = sessionStorage.getItem("currentUser")
        setLogged(user !== "undefined");
    })

    return (
        <header class="header">
                <div className="header__left">
                    <StyledLink component={RouterLink} to="/"><img src={logo} /></StyledLink>
                    <StyledLink component={RouterLink} to="/services">Services</StyledLink>
                    <StyledLink component={RouterLink} to="/about">About</StyledLink>
                    <StyledLink component={RouterLink} to="/contact">Contact Us</StyledLink>
                </div>
                <div className={"login-section header__right"}>
                    {isLogged && <StyledLink component={RouterLink} className="btn btn--default" to="/myServices">MyServices</StyledLink>}
                    {isLogged && <StyledLink component={RouterLink} className="btn btn--default" to="/addService">Add Service</StyledLink>}
                    <StyledLink component={RouterLink} to="/contractor"><u>Become a contractor</u></StyledLink>
                    {isLogged && <Logout/>}
                    {!isLogged && <StyledLink component={RouterLink} className="btn btn--default" to="/login">Login</StyledLink>}
                </div>
        </header>
    )
}

export default withRouter(Header)
