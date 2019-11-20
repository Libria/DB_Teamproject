import React from 'react';
import { Detecting } from './Seat';
import './Seatlist.css';

class Seatlist extends React.Component {
    constructor() {
        super()
        this.lists = [];

        this.state = {
            detect: 0,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({detect: Detecting});
        console.log("detect : " + this.state.detect);
    }

    listPush() {
        this.lists = [];
        var len = document.getElementsByClassName('Makinglist').length;
        for (var i=0; i<len; i++) {
            var val = document.getElementsByClassName('Makinglist')[i].innerHTML;
            this.lists.push(val);
        }
    }

    render() {
        this.listPush();
        return (
            this.lists.map(current =>
            <option className="Makedlist" key={current}>Seat : {current}</option>    
            )
        );
    }
}

export default Seatlist;