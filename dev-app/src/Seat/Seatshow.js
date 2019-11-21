import React from 'react';
import PropTypes from 'prop-types';

class Seatshow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Seatshow">
                <ul>
                    {this.props.Seat.map(current => {
                        if (current.Bookings === 'sel') {
                            return <li>{current.Row}C{current.Col}</li>
                        }
                    })}
                </ul>
            </div>
        );
    }
}

Seatshow.propTypes = {
    Seat: PropTypes.object.isRequired
};

export default Seatshow;