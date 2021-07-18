import React from "react";
import "./css/style.css";

import Logo from "./images/logo.svg";
import Dollar from "./images/icon-dollar.svg";
import Person from "./images/icon-person.svg";

export default class Home extends React.Component {
    constructor(props){
        super(props)
            this.state={
                billAmount:0.00,
                tipAmount:0.00,
                totalPerson:1,
            }
    }
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
                <div className="tip-container">
                    <div className="input-section">
                        <div className="bill-amount">
                            <label for="bill">Bill</label>
                            <div className="bill">
                                <img 
                                    src={Dollar}
                                    alt="currency"
                                />
                                <input name="bill" type="number" value={this.state.billAmount} onChange={event=>this.setState({billAmount:event.target.value})}/>                           
                            </div>
                        </div>
                        <div className="tip-percent">
                            <label for="tip">Select Tip %</label>
                            <div className="tip">
                                {/* <> */}
                            </div>
                        </div>
                        <div className="total-person">
                            <label for="person">Number of People</label>
                            <div className="person">
                                <img 
                                    src={Person}
                                    alt="currency"
                                />
                                <input name="person" type="number" value={this.state.totalPerson} onChange={event=>this.setState({totalPerson:event.target.value})}/>                           
                            </div>
                        </div>
                    </div>
                    <div className="output-section">
                        <div className="tip-amount">
                            <p className="amount-heading">
                                Tip Amount<br />
                                <span className="dark-heading">/ person</span>
                            </p>
                            <div className="tip-display">
                                $ {this.state.tipAmount===0.00?"0.00":parseFloat(this.state.tipAmount).toFixed(2)}
                            </div>
                        </div>
                        <div className="total-amount">
                            <p className="amount-heading">
                                Total<br />
                                <span className="dark-heading">/ person</span>
                            </p>
                            <div className="tip-display">
                                $ {this.state.billAmount===0.00?"0.00":parseFloat(this.state.billAmount/this.state.totalPerson).toFixed(2)}
                            </div>
                        </div>
                        <div className="reset-container">
                            <button
                                onClick={()=>{
                                    this.setState({
                                        billAmount:0.00,
                                        tipAmount:0.00,
                                        totalPerson:1,
                                    })
                                }}
                            >
                                RESET
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}