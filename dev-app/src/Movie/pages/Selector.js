import React from 'react';
import { MovieSelector } from '../MovieSelect';
import { TheaterSelector } from '../TheaterSelect';
import { DateSelector } from '../DateSelect';
import { TimeSelector } from '../TimeSelect';
import PropTypes from 'prop-types';
import Seatbook from './Seatbook';
import { TimeSet } from '../TimeSelect/SampleTime';
//import { Seats2 } from '../Seat/Seatinfo2';
import './Selector.css';

class Selector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reload: false,
            seat: false,
            sereload: false,
            selectedSet: {
                Date: null,
                Theater: {},
                Movie: {},
                Time: {
                    index: 0,
                    start: '00:00',
                    end: '00:00',
                    name: 'Movie name',
                    theater: '지역',
                    theaternum: 0,
                    nowseat: 0,
                    maxseat: 0,
                    Seat: []
                }
            }
        }

        this.popupSeat = this.popupSeat.bind(this);
        this.toggleSelector = this.props.onToggleSelector.bind(this);
        this.selectedConfirm = this.selectedConfirm.bind(this);
        
        this.theaterSet = [];
    }
    
    componentWillReceiveProps(nextProps) {
        var tmp = this.state.reload;
        this.setState({reload: nextProps.Reload, sereload: tmp});
    }

    componentDidMount() {
        this.makingSeatTheater();
    }

    makingSeatTheater() {
        var tmp = this.state.selectedSet;
        for (var i=0; i<TimeSet.length; i++) {
            const tmpSeat = this.makingSeatSet();
            tmp.Time.Seat.push(tmpSeat);
        }
        this.setState({selectedSet: tmp});
    }

    //빡쳐서 넣은 것
    // row by col 만큼 ava 좌석 어레이 생성
    seatMaker(row, col) {
        var Seats = [];
        for (var i=0; i<row; i++) {
            for (var j=0; j<col; j++) {
                Seats.push({
                    Row: i+1,
                    Col: j+1,
                    Bookings: 'ava'
                });
            } 
        }
        return Seats;
    }

    // row, col 인 좌석을 nul로 변경
    // colnum = col 개수, Seatset = 어레이
    seatNull(row, col, colnum, Seatset) {
        var index = colnum * (row - 1) + col - 1;
        Seatset[index].Bookings = 'nul';
        return Seatset;
    }

    makingSeatSet() {
        var SeatSet = this.seatMaker(10,10);
        for (var i=0; i<10; i++) {
            SeatSet = this.seatNull(i+1,3,10,SeatSet);
            SeatSet = this.seatNull(i+1,8,10,SeatSet);
        }
        return SeatSet
    }
    //빡쳐서 넣은 것 끝

    //Code Duplicated;;
    makingDateString(year, month, date) {
        var weekend = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
        var day = new Date(year,month,date);
        var week = day.getDay();
        week = weekend[week];
        var DateString = String(month) + "/" + String(date) + week;
        return DateString;
    }

    makingDateZone(year, month, today) {
        var arr = [];

        for (var i=0; i<30; i++) {
            var date = new Date(year, month, today+i);
            var year2 = date.getFullYear();
            var month2 = date.getMonth()+1;
            var today2 = date.getDate();
            var DateString = this.makingDateString(year2, month2, today2);
            arr.push(DateString);
        }
        return arr;
    }

    makingDateSet() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var today = date.getDate();
        var days = this.makingDateZone(year, month, today);

        return days;
    }
    //Code Duplicated end;;

    selectedConfirm(which, value) {
        var tmp = this.state.selectedSet;
        if (which === 'Date') {
            var days = this.makingDateSet();
            tmp.Date = days[value];
        } else if (which === 'Theater') {
            this.theaterSet = value;
            // 세트에서 첫번째 꺼
            tmp.Theater = this.theaterSet;
        } else if (which === 'Movie') {
            tmp.Movie = value;
        } else if (which === 'Time') {
            tmp.Time.index = value.index;
            tmp.Time.start = value.start;
            tmp.Time.end = value.end;
            tmp.Time.name = value.name;
            tmp.Time.theater = value.theater;
            tmp.Time.theaternum = value.theaternum;
            tmp.Time.nowseat = value.nowseat;
            tmp.Time.maxseat = value.maxseat;
        } else {
        }
        this.setState({selectedSet: tmp});
        console.log(this.state.selectedSet);
    }

    popupSeat() {
        if (this.state.seat === true) {
            this.setState({seat: false});
        } else {
            this.setState({seat: true});
        }
    }

    toggleSelector() {
        this.props.onToggleSelector();
    }

    render() {
        return (
            <div className="Selector">
                <div className="LeftSelector">
                    <DateSelector Reload={this.state.reload}
                    SeReload={this.state.sereload}
                    onSelectedConfirm={this.selectedConfirm}></DateSelector>
                    <TheaterSelector Reload={this.state.reload}
                    SeReload={this.state.sereload}
                    onSelectedConfirm={this.selectedConfirm}></TheaterSelector>
                    <MovieSelector Reload={this.state.reload}
                    SeReload={this.state.sereload}
                    onSelectedConfirm={this.selectedConfirm}></MovieSelector>
                </div>
                <div className="RightSelector">
                    <TimeSelector Reload={this.state.reload}
                    onPopupSeat={this.popupSeat}
                    SeReload={this.state.sereload}
                    onSelectedConfirm={this.selectedConfirm}
                    selectedSet={this.state.selectedSet}></TimeSelector>
                </div>
                <div className="SeatModal"
                style={{display: this.state.seat ? 'block' : 'none'}}>
                    <Seatbook Reload={this.state.seat}
                    onPopupSeat={this.popupSeat}
                    onToggleSelector={this.toggleSelector}
                    selectedSet={this.state.selectedSet}
                    onSelectedConfirm={this.selectedConfirm}></Seatbook>
                </div>
            </div>
        );
    }
}

Selector.propTypes = {
    Reload: PropTypes.bool.isRequired
}

export default Selector;