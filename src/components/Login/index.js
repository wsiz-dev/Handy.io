import {Redirect, useLocation} from 'react-router-dom';
import BorderButton from "../StyledButton/BorderButton";
import React, {useState} from "react";

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

    return (<div>
        <p>Plese login</p>
        <BorderButton onClick={fbLogin}>Facebook login</BorderButton>
        {isLogged && <Redirect to={path}/>}
    </div>)
}
export default Login
