import React from 'react';
import "./css/style.css";

export default class Tipbutton extends React.Component {
    render(){
        return(
            <div className={"tip-button"}>
                <p className="tip-button-text">
                    {this.props.percent}
                </p>
            </div>
        )
    }
}