﻿import React, {useState} from "react";
import BorderButton from "../StyledButton/BorderButton";
import {Redirect, withRouter} from "react-router-dom";
import {Link} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const StyledLink = withStyles({
    root: {
        width: '16rem',
        margin: '0 3vw',
    },
})(Link);

const Logout = () => {
    const [isLogged, setLogged] = useState(true);
    const fbLogout = () => {
        sessionStorage.setItem("currentUser", undefined);
        setLogged(false);
    }

    return (
        <BorderButton color={"secondary"} onClick={fbLogout}>
            <StyledLink>Logout</StyledLink>
            {!isLogged && <Redirect to='/'/>}
        </BorderButton>
    )
}

export default  withRouter(Logout)
