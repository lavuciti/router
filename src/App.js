import React from "react";
import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";


class App extends Component {
    render(){
        return(
            <BrowserRouter> 
                <Navbar />
               
                <Route path="/" exact component={Home}></Route>  
                <Route path="/about" component={About}></Route>
            </BrowserRouter>
            
        )
    }
}

export default App;

 /*ako se ne stavi exact tada kada se klikne na about vidi se i home page i about page*/