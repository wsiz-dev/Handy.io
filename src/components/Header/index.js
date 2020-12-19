import React from "react";
import Icon from "@material-ui/core/Icon"
import Link from "@material-ui/core/Link"
import '../../style/style.css'
import withStyles from "@material-ui/core/styles/withStyles";
import StyledButton from '../StyledButton'

const StyledLink = withStyles({
    root: {
        width: '16rem',
        margin: '0 3vw',
    },
})(Link);




const Header = () => {
    return (
        <header>
            <nav>
                <div className="header-body">
                    <Icon>handy.io</Icon>
                    <StyledLink>Services</StyledLink>
                    <StyledLink>About</StyledLink>
                    <StyledLink>Contact Us</StyledLink>
                    <div className={"login-section"}>
                        <StyledLink>Become a contractor</StyledLink>
                        <StyledButton color={"secondary"} className="login-button">Login</StyledButton>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
