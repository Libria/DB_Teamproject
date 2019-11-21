import React from 'react';
import Seateach from './Seateach';
import PropTypes from 'prop-types';

import './Seatconstructor.css'

class Seatconstructor extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.col = 0;
    }

    handleClick(row, col) {
        this.props.onhandleClick(row,col);
    }

    transfer() {
        this.col += 1;
        return (
            <Seateach
            onhandleClick={this.handleClick}
            Seat={this.props.Seats.Bookings[this.col-1]}
            Row={this.props.Seats.Row} Col={this.col-1}/>
        )
    }

    render() {
        this.col=0;
        console.log(this.props.Seats);
        return (
            <div className="Seatconstructor">
                {this.props.Seats.Bookings.map(current => {
                    return (this.transfer())
                })   
            }
        </div>
        )
    }
}

Seatconstructor.propTypes = {
    Seats: PropTypes.object.isRequired
};

export default Seatconstructor;