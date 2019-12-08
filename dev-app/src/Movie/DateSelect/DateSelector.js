import React from 'react';
import './DateSelector.css';
import DateSlide from './DateSlide';
import PropTypes from 'prop-types';

class DateSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            clicked: null,
            reload: false,
            sereload: false
        }

        this.selectDate = this.selectDate.bind(this);
        this.selectAllTheater = this.selectAllTheater.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({reload: nextProps.Reload, sereload: nextProps.SeReload});
        this.checkReload();
    }

    checkReload() {
        if (this.state.reload === true && this.state.sereload === true) {
            this.selectAllTheater();
        }
    }

    selectAllTheater() {
        this.setState({selected: 0, clicked: null});
    }

    selectDate(index) {
        if (index > -1 && index < 26) {
            this.setState({selected: index, clicked: index});
        } else if (index > 25 && index < 30) {
            this.setState({selected: 25, clicked: index});
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
                    onSelectDate={this.selectDate}
                    clicked={this.state.clicked}></DateSlide>
                </div>
            </div>
        );
    }
}

DateSelector.propTypes = {
    Reload: PropTypes.bool.isRequired,
    SeReload: PropTypes.bool.isRequired
}

export default DateSelector;