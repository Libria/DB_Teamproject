import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Seat from './Seat';
import './SeatConstructor.css';

class SeatConstructor extends React.Component {
    constructor(props) {
        super(props);

        this.Numcol = [];
        this.RCnum = false;
    }

    making() {
        for(var i=0; i<this.props.Cols; i++) {
            this.Numcol.push(i+1);
        }
    }

    render() {
        this.making();
        return (
            <div className="SeatConstructor">
                {this.Numcol.map(current =>
                <Seat key={current} Row={this.props.Row} Col={current}
                Booking={this.props.Bookings[current-1]}/>
                )}
            </div>
        );
    }
}

SeatConstructor.propTypes = {
    Row: PropTypes.string.isRequired,
    Cols: PropTypes.number.isRequired,
    Bookings: PropTypes.array.isRequired
};

export default SeatConstructor;