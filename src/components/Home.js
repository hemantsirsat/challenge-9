import React from "react";
import "./css/style.css";

import Logo from "./images/logo.svg";

export default class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="logocontainer">
                    <img 
                        src={Logo}
                        alt="logo"
                        className="logo"
                    />
                </div>
                <div className="tipcontainer">
                
                </div>
            </div>
        )
    }
}