import React from "react";
import Icon from "@material-ui/core/Icon"
import Link from "@material-ui/core/Link"
import '../../style/style.css'
import withStyles from "@material-ui/core/styles/withStyles"
import BorderButton from '../StyledButton/BorderButton'
import {Link as RouterLink, withRouter} from 'react-router-dom'

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
                    <Icon>
                        <StyledLink component={RouterLink} to="/">handy.io</StyledLink>
                    </Icon>
                    <StyledLink component={RouterLink} to="/services">Services</StyledLink>
                    <StyledLink component={RouterLink} to="/about">About</StyledLink>
                    <StyledLink component={RouterLink} to="/contact">Contact Us</StyledLink>
                    <div className={"login-section"}>
                        <StyledLink component={RouterLink} to="/contractor">Become a contractor</StyledLink>
                        <BorderButton color={"secondary"}>Login</BorderButton>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default withRouter(Header)
