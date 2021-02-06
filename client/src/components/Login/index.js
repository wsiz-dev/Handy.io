﻿import {Redirect, useLocation} from 'react-router-dom';
import BorderButton from "../StyledButton/BorderButton";
import React, {useState} from "react";
import icon from '../../fb-icon.svg';

const currentUser = "currentUser"

const Login = () => {
    const [isLogged, setLogged] = useState(false);
    const location = useLocation();
    const path = location.state || "/";

    const fbLogin = async () => {
        await window.FB.getLoginStatus(response => {
            if (response.status !== "connected") {
                window.FB.login()
            }
            window.FB.api("/me", user => {
                if(user !== "undefined" && user?.id !== "undefined"){
                    sessionStorage.setItem(currentUser, JSON.stringify(user))
                    setLogged(true)
                }
                console.log("User", user)
            })
        })
    }

    return (<div className="login page">
        <h2>
            Sign in
        </h2>
        <p>We take security issues seriously, which is why our platform uses only fully secured authentication methods.</p>
        <button onClick={fbLogin}>
            <img src={icon} width="24"/> 
            <span><span>Sign in with</span> <b>Facebook</b></span></button>
        {isLogged && <Redirect to={path}/>}
    </div>)
}
export default Login
