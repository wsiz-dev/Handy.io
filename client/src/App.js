import './App.css';
import './style/style.scss';
import React, {Component} from "react";
import TopServices from "./components/TopServices";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Contractor from "./components/Contractor";
import Services from "./containers/Services/Services";
import ServiceEdit from "./components/ServiceEdit";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Login from "./components/Login";
import ServiceDetails from "./components/ServiceDetails";
import AddService from "./components/AddService";
import EditService from "./components/EditService";
import history from "./helpers/history";


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem("currentUser") ? (
                <Component {...props}/>
            ) : (
                <Redirect
                    to={{
                        pathname: "login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
)

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Header classes={{label: 'header'}}/>
                <div className={"container"}>
                    <Route exact path="/" component={Hero}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <PrivateRoute exact path="/contractor" component={Contractor}/>
                    <PrivateRoute exact path="/addService" component={AddService}/>
                    <PrivateRoute exact path="/editService/:id" component={EditService}/>
                    <Route exact path="/services" component={Hero}/>
                    <Route exact path="/services" component={Services}/>
                    <Route exact path="/services/:phrase" component={Hero}/>
                    <Route exact path="/services/:phrase" component={Services}/>
                    <Route exact path="/topServices" component={TopServices}/>
                    <Route exact path="/serviceEdit" component={ServiceEdit}/>
                    <Route exact path="/service/:id" component={ServiceDetails}/>
                    <Route exact path="/login" component={Login}/>
                </div>
            </Router>
            <div className={"container"}>
                <TopServices/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
