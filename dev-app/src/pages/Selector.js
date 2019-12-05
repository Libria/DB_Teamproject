import React from 'react';
import { MovieSelector } from '../MovieSelect';
import { TheaterSelector } from '../TheaterSelect';
import { DateSelector } from '../DateSelect';
import { TimeSelector } from '../TimeSelect';
import PropTypes from 'prop-types';
import Seatbook from './Seatbook';
import './Selector.css';

class Selector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reload: false,
            seat: false,
            sereload: false
        }

        this.popupSeat = this.popupSeat.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        var tmp = this.state.reload;
        this.setState({reload: nextProps.Reload, sereload: tmp});
    }

    popupSeat() {
        if (this.state.seat === true) {
            this.setState({seat: false});
        } else {
            this.setState({seat: true});
        }
    }

    render() {
        console.log('-----------');
        console.log('se ' + this.state.sereload);
        console.log('re ' + this.state.reload);
        return (
            <div className="Selector">
                <div className="LeftSelector">
                    <DateSelector Reload={this.state.reload}
                    SeReload={this.state.sereload}></DateSelector>
                    <TheaterSelector Reload={this.state.reload}
                    SeReload={this.state.sereload}></TheaterSelector>
                    <MovieSelector Reload={this.state.reload}
                    SeReload={this.state.sereload}></MovieSelector>
                </div>
                <div className="RightSelector">
                    <TimeSelector Reload={this.state.reload}
                    onPopupSeat={this.popupSeat}
                    SeReload={this.state.sereload}></TimeSelector>
                </div>
                <div className="SeatModal"
                style={{display: this.state.seat ? 'block' : 'none'}}>
                    <Seatbook Reload={this.state.seat}
                    onPopupSeat={this.popupSeat}></Seatbook>
                </div>
            </div>
        );
    }
}

Selector.propTypes = {
    Reload: PropTypes.bool.isRequired
}

export default Selector;