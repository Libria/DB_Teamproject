import React from 'react';
import PropTypes from 'prop-types';

export var Detecting = 0;

class Seat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isbooked: this.props.Booking
        };

        this.handleClick = this.handleClick.bind(this);
        this.checking = this.checking.bind(this);
    }

    handleClick() {
        if (this.state.isbooked === 'ava') {
            this.setState({isbooked: 'boo'});
            Detecting += 1;
        } else if (this.state.isbooked === 'boo') {
            this.setState({isbooked: 'ava'});
            Detecting -= 1;
        }
    }

    checking() {
        if (this.state.isbooked === 'ava') {
            return (
                <button className="Available" onClick={this.handleClick}>
                    {this.props.Row}{this.props.Col}</button>
            );
        } else if (this.state.isbooked === 'boo') {
            return (
                <button className="Booked" onClick={this.handleClick}>
                    {this.props.Row}{this.props.Col}</button>
            );
        } else if (this.state.isbooked === 'dis') {
            return (
                <button className="Disabled" disabled='disabled' onClick={this.handleClick}>
                    {this.props.Row}{this.props.Col}</button>
            );
        } else {
            return (
                <button className="Null" disabled='disabled'></button>
            )
        }
    }

    makingList() {
        if(this.state.isbooked === 'boo') {
            return (
                <p className="Makinglist">{this.props.Row}{this.props.Col}</p>
            )
        }
    }

    render() {
        return (
            <div className="Seat">
                {this.checking()}
                <div className="Seatnum">
                    {this.makingList()}
                </div>
            </div>
        );
    }
}

Seat.propTypes = {
    Row: PropTypes.string.isRequired,
    Col: PropTypes.number.isRequired,
    Booking: PropTypes.string.isRequired
};

export default Seat;