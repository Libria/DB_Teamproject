import React from 'react';
import './DateSelector.css';
import DateSlide from './DateSlide';

class DateSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }

        this.selectDate = this.selectDate.bind(this);
        this.selectAllTheater = this.selectAllTheater.bind(this);
    }

    selectAllTheater() {
        this.setState({selected: 0});
    }

    selectDate(index) {
        if (index > -1 && index < 26) {
            this.setState({selected: index});
        } else if (index > 25 && index < 30) {
            this.setState({selected: 25});
        }
    }

    render() {
        return (
            <div className="DateSelector">
                <div className="DateSelNav">
                    <h2>날짜</h2>
                    <button onClick={this.selectAllTheater}></button>
                </div>
                <div className="DateSelContent">
                    <DateSlide selected={this.state.selected}
                    onSelectDate={this.selectDate}></DateSlide>
                </div>
            </div>
        );
    }
}

export default DateSelector;