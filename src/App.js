import './App.css';
import React from "react";
import TopServices from "./components/TopServices";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Contractor from "./components/Contractor";
import Services from "./containers/Services/Services";
import ServiceEdit from "./components/ServiceEdit";
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'


const dummyService = {
    name: "Service one",
    added: "23.12.2020",
    phone: "232 321 432",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus blanditiis consequatur debitis dicta eaque eligendi expedita facere inventore labore nihil non omnis, optio placeat sequi sint vitae. Magni, nisi!"
}

function App() {
    return (
        <div className="App">
            <Router>
                <Header classes={{label: 'header'}}/>
                <div className={"container"}>
                        <Route exact path="/" component={Hero}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/contractor" component={Contractor}/>
                        <Route exact path="/services" component={Hero}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/serviceEdit" component={ServiceEdit}/>
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
