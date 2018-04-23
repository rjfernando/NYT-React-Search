import React from "react";
import "./Jumbotron.css";
import "./Jumbotron";

const Jumbotron = props => {

return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4" style= {{textAlign: "center"}}>New York Times</h1>
            <p class="lead" style= {{textAlign: "center"}}>React Version</p>
            <h2 className = "Jumbotron">{props.children}</h2>
        </div>
        </div>
    )
};


export default Jumbotron;