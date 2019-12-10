import React from 'react';
import './TimeSelector.css';

import {TimeSet} from './SampleTime';
import PropTypes from 'prop-types';

class TimeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            clicked: null,
            timeline: null,
            reload: false,
            sereload: false
        }

        this.popupSeat = this.props.onPopupSeat.bind(this);
        this.timeConfirm = this.timeConfirm.bind(this);
        this.selectedSet = this.props.selectedSet;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({reload: nextProps.Reload, sereload: nextProps.SeReload});
        this.checkReload();
    }

    checkReload() {
        if (this.state.reload === false && this.state.sereload === true) {
            this.setState({selected: 0, clicked: null, timeline: null, reload: false});
        }
    }

    popupSeat() {
        this.props.onPopupSeat();
    }

    timeConfirm(current) {
        this.props.onSelectedConfirm('Time', current);
        this.popupSeat();
    }

    selectTime(index) {
        if (index > -1 && index < 15) {
            this.setState({selected: index, clicked: index});
        } else if (index >= 15 && index < 24) {
            this.setState({selected: 14, clicked: index});
        }
    }

    makingTimeSet() {
        var times = [];
        for (var i=0; i<24; i++) {
            times.push(i);
        }
        return times;
    }

    renderSlide(num) {
        const times = this.makingTimeSet();
        if (num === this.state.clicked) {
            return <button className="LocalTime" key={num} style={{backgroundColor: 'rgb(48,156,166)'}}
            onClick={this.selectTime.bind(this, num)}>{times[+num]}</button>
        } else {
            return <button className="LocalTime" key={num}
            onClick={this.selectTime.bind(this, num)}>{times[num]}</button>
        }
    }

    renderTimebar() {
        const index = [0,1,2,3,4,5,6,7,8,9];
        return (
            <div className="TimeSlide">
                <button className="MoveTime"
                onClick={this.selectTime.bind(this, this.state.selected-1)}>◀</button>
                {index.map(current => {
                    return this.renderSlide(current+this.state.selected);
                })}
                <button className="MoveTime"
                onClick={this.selectTime.bind(this, this.state.selected+1)}>▶</button>
            </div>
        );
    }

    renderScheSet(current) {

        var seltime = Math.floor(current.start.substring(0,2));
        if (seltime >= this.state.clicked && seltime < this.state.clicked+1) {
            return (
                <button className="TimeSet" key={current.index} style={{border: 'solid 1px #99CCFF'}}
                onClick={this.timeConfirm.bind(this, current)}>
                    <div className="TimeArea">
                        <h3>{current.start}</h3><p> ~ {current.end}</p>
                    </div>
                    <span>|</span>
                    <div className="TimeName">
                        <p>{current.name}</p>
                    </div>
                    <span>|</span>
                    <div className="TimeTheater">
                        <p>{current.theater}</p><br/>
                        <p>{current.theaternum}관</p><br/>
                        <p>{current.nowseat} / {current.maxseat}</p>
                    </div>
                </button>
            );
        } else {
            return (
                <button className="TimeSet" key={current.index}
                onClick={this.timeConfirm.bind(this, current)}>
                    <div className="TimeArea">
                        <h3>{current.start}</h3><p> ~ {current.end}</p>
                    </div>
                    <span>|</span>
                    <div className="TimeName">
                        <p>{current.name}</p>
                    </div>
                    <span>|</span>
                    <div className="TimeTheater">
                        <p>{current.theater}</p><br/>
                        <p>{current.theaternum}관</p><br/>
                        <p>{current.nowseat} / {current.maxseat}</p>
                    </div>
                </button>
            );
        }
    }

    renderSchedule() {
        var TimeSet2 = [];
        if (this.selectedSet.Movie.length !== 0) {
            for (var i=0; i<TimeSet.length; i++) {
                for (var j=0; j<this.selectedSet.Movie.length; j++) {
                    if (TimeSet[i].name === this.selectedSet.Movie[j].title) {
                        for (var k=0; k<this.selectedSet.Theater.length; k++) {
                            if (TimeSet[i].theater === this.selectedSet.Theater[k].name) {
                                TimeSet2.push(TimeSet[i]);
                            }
                        }
                    }
                }
            }
        }
        return (
            TimeSet2.map(current => {
                return this.renderScheSet(current);
            })
        );
    }

    render() {
        return (
            <div className="TimeSelector">
                <div className="TimeSelNav">
                    <h2>시간</h2>
                    {this.renderTimebar()}
                </div>
                <div className="TimeLine">
                    {this.renderSchedule()}
                </div>
            </div>
        )
    }
}

TimeSelector.propTypes = {
    Reload: PropTypes.bool.isRequired,
    onPopupSeat: PropTypes.func.isRequired,
    SeReload: PropTypes.bool.isRequired
}

export default TimeSelector;