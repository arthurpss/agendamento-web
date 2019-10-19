import React from 'react';
import './App.css';

import Navbar from "../navbar";
import Routes from "../../routes";

const App = () => (
    <div className="App" data-spy="scroll" data-target="#navbar" data-offset="0">
        <Navbar/>
        <Routes/>
    </div>
);

export default App;
