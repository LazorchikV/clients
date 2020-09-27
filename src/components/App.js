import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Registrations from "./Registrations";
import ListClient from "./ListClient";
import AbouteMe from "./AboutMe";
import LoginControl from "./ListClient/Login"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <LoginControl />
                <Header /> 
                <Navbar />
                <div>                                                  
               <h3 className="CenterMe">
                   <Route path='/registrations' component={Registrations} />
                   <Route path='/list' component={ListClient} />
                   <Route path='/aboute' component={AbouteMe} />
                 
                </h3>
                </div>       
                
            </BrowserRouter>
        )
    }
};
export default App;