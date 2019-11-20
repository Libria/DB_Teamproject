import React, { Component } from 'react';
import './Navtop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import samicon from './img/samicon.PNG';

class Navtop extends Component {
    render() {
        return (
            <div className="navtop">
                <ul>
                    <li><a href="#home"><img src={samicon}/></a></li>
                    <li><a href="#movies"><img src={samicon}/></a></li>
                    <li><a href="#home"><img src={samicon}/></a></li>
                    <li><a href="#news"><img src={samicon}/></a></li>
                    <li><a href="#contact"><img src={samicon}/></a></li>
                    <li id="Login"><a className="active" href="#about">About</a></li>
                </ul>
            </div>
        )
    }
}

export default Navtop;