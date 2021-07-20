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
                totalPerson:1,
                tipPercent:"1",
            }
    }

    totalTip() {
        var bill = this.state.billAmount;
        var tipPercent = parseFloat(this.state.tipPercent)/100.00;
        var tip = bill*tipPercent;
        return tip;
    }

    tipPerPerson() {
        var tip = this.totalTip();
        return tip/parseFloat(this.state.totalPerson);
    }

    totalPerPerson() {
        var bill = parseFloat(this.state.billAmount);
        var tip = parseFloat(this.totalTip());
        var total = bill+tip;
        return total/parseFloat(this.state.totalPerson);
    }

    validatePerson() {
        if(parseInt(this.state.totalPerson)>0){
            return true;
        } else {
            return false;
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
                                <div className="tip-container1">
                                    <button
                                        onClick={()=>{
                                            this.setState({
                                                tipPercent:5,
                                            })
                                        }}
                                    >
                                        <div className={this.state.tipPercent===5?"tip-button-pressed":"tip-button"}>
                                            <p className={this.state.tipPercent===5?"tip-button-text-pressed":"tip-button-text"}>
                                                5%
                                            </p>
                                        </div>
                                    </button>
                                    <button
                                        onClick={()=>{
                                            this.setState({
                                                tipPercent:10,
                                            })
                                        }}
                                    >
                                        <div className={this.state.tipPercent===10?"tip-button-pressed":"tip-button"}>
                                            <p className={this.state.tipPercent===10?"tip-button-text-pressed":"tip-button-text"}>
                                                10%
                                            </p>
                                        </div>
                                    </button>
                                    <button
                                        onClick={()=>{
                                            this.setState({
                                                tipPercent:15,
                                            })
                                        }}
                                    >
                                        <div className={this.state.tipPercent===15?"tip-button-pressed":"tip-button"}>
                                            <p className={this.state.tipPercent===15?"tip-button-text-pressed":"tip-button-text"}>
                                                15%
                                            </p>
                                        </div>
                                    </button>
                                </div>
                                <div className="tip-container2">
                                    <button
                                        onClick={()=>{
                                            this.setState({
                                                tipPercent:25,
                                            })
                                        }}
                                    >
                                        <div className={this.state.tipPercent===25?"tip-button-pressed":"tip-button"}>
                                            <p className={this.state.tipPercent===25?"tip-button-text-pressed":"tip-button-text"}>
                                                25%
                                            </p>
                                        </div>
                                    </button>
                                    <button
                                        onClick={()=>{
                                            this.setState({
                                                tipPercent:50,
                                            })
                                        }}
                                    >
                                        <div className={this.state.tipPercent===50?"tip-button-pressed":"tip-button"}>
                                            <p className={this.state.tipPercent===50?"tip-button-text-pressed":"tip-button-text"}>
                                                50%
                                            </p>
                                        </div>
                                    </button>
                                    <input name="tip-percent" type="number" min="1" max="100" placeholder="Custom" value={this.state.tipPercent} onChange={event=>this.setState({tipPercent:event.target.value})} className="custom-tip"/>                           
                                </div>
                            </div>
                        </div>
                        <div className="total-person">
                            <div className="person-label">
                                <label for="person">Number of People</label>
                                <label for="person" id={this.validatePerson()?"hidden":"zeropeople"}>Can't be zero</label>
                            </div>
                            <div className={this.validatePerson()?"person":"zeroperson"}>
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
                                $ {this.state.tipPercent===""?
                                        "0.00"
                                    :
                                        parseFloat(this.tipPerPerson()).toFixed(2)
                                }
                            </div>
                        </div>
                        <div className="total-amount">
                            <p className="amount-heading">
                                Total<br />
                                <span className="dark-heading">/ person</span>
                            </p>
                            <div className="tip-display">
                                $ {this.state.billAmount===0.00?
                                        "0.00"
                                    :
                                        parseFloat(this.totalPerPerson()).toFixed(2)}
                            </div>
                        </div>
                        <div className="reset-container">
                            <button
                                onClick={()=>{
                                    this.setState({
                                        billAmount:0.00,
                                        tipAmount:0.00,
                                        totalPerson:1,
                                        tipPercent:1
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