import './App.css';
import React from "react";
import TopServices from "./components/TopServices";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="App">
            <Header classes={{ label: 'header' }}/>
            <body>
            <Hero/>
            <TopServices/>
            </body>
            <Footer/>
        </div>
    );
}

export default App;
