import './App.css';
import React from "react";
import TopServices from "./components/TopServices";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Contractor from "./components/Contractor";
import Service from "./components/Service";
import Services from "./containers/Services/Services";
import ServiceDetails from "./components/ServiceDetails";
import ServiceEdit from "./components/ServiceEdit";


const dummyService = {
    name: "Service one",
    added: "23.12.2020",
    phone: "232 321 432",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus blanditiis consequatur debitis dicta eaque eligendi expedita facere inventore labore nihil non omnis, optio placeat sequi sint vitae. Magni, nisi!"
}

function App() {
    return (
        <div className="App">
            <Header classes={{label: 'header'}}/>
            <body className={"container"}>
            <ServiceEdit/>
            <ServiceDetails name={dummyService.name} added={dummyService.added} phone={dummyService.phone} description={dummyService.description}/>
            <Hero/>
            <Services/>
            <TopServices/>
            <About/>
            <Contact/>
            <Contractor/>
            </body>
            <Footer/>
        </div>
    );
}

export default App;
