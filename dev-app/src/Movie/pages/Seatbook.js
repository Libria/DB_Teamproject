import React from 'react';

import { Seateach, Seatshow, Seats2 } from '../Seat';
import PropTypes from 'prop-types';
import '../Seat/Seatbook.css'


class Seatbook extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkReload = this.checkReload.bind(this);
    this.popupSeat = this.props.onPopupSeat.bind(this);
    this.alertConfirm = this.alertConfirm.bind(this);
    this.toggleSelector = this.props.onToggleSelector.bind(this);
    this.selectedSet = this.props.selectedSet;
    this.count = 0;
    this.tmpSel = [];

    this.state = {
      Seatinfo: [],
      reload: false
    }
  }

  componentDidMount() {
    this.setState({Seatinfo: Seats2});
  }

  /*
  componentWillUnmount() {
    for (var i=0; i < Seats2.length; i++) {
      if(Seats2[i].Bookings === 'sel') {
        Seats2[i].Bookings = 'ava';
      }
    }
  }
  */

  componentWillReceiveProps(nextProps) {
    this.setState({reload: nextProps.Reload});
    this.checkReload();
  }

  checkReload() {
    if (this.state.reload === true) {
      var tmp = this.state.Seatinfo;
      tmp.map(current => {
        if (current.Bookings === 'sel') {
          current.Bookings = 'ava';
        }
      });
      this.count = 0;
      this.setState({Seatinfo: tmp});
    }
  }

  handleClick(row, col) {
    var tmp = this.state.Seatinfo;
    // colnum : 10 , Seatinfo2와 같게
    var index = 10 * (row - 1) + col - 1;
    if (tmp[index].Bookings === 'ava') {
      tmp[index].Bookings = 'sel'
      this.count += 1;
      this.tmpSel.push(index);
      return this.setState({Seatinfo: tmp});
    } else if (tmp[index].Bookings === 'sel') {
      tmp[index].Bookings = 'ava'
      this.count -= 1;
      var arrindex = this.tmpSel.indexOf(index);
      this.tmpSel.splice(arrindex,1);
      return this.setState({Seatinfo: tmp});
    }
  }

  popupSeat() {
    this.props.onPopupSeat();
  }

  alertConfirm() {
    alert("결제 되었습니다.");
    var tmp = this.state.Seatinfo;
    for (var i=0; i<this.tmpSel.length; i++) {
      tmp[this.tmpSel[i]].Bookings = 'dis';
    }
    this.setState({Seatinfo: tmp});
    this.popupSeat();
    this.toggleSelector();
  }

  toggleSelector() {
    this.props.onToggleSelector();
  }

  getImg() {
    var name = this.selectedSet.Time.name;
    var src = null;
    for (var i=0; i<this.selectedSet.Movie.length; i++) {
      if (name === this.selectedSet.Movie[i].title) {
        src = this.selectedSet.Movie[i].medium_cover_image;
      }
    }
    return src;
  }

  render() {
    var imgsrc = this.getImg();
    return (
      <div className="Seatbooksum">
        <h1>인원 / 좌석 선택</h1>
        <div className="Seatbook">
          <div className="Seatselection">
            <h1>Screen</h1>
            {this.state.Seatinfo.map(current => {
              return (
                <Seateach key={10*(current.Row-1)+current.Col-1}
                onhandleClick={this.handleClick.bind(this, current.Row, current.Col)}
                Seat={current}
                Row={current.Row}
                Col={current.Col}/>
              )
            })}
          </div>
          <div className="Seatinformation">
            <img src={imgsrc}></img>
            <ul>
              <li>영화관 : {this.selectedSet.Time.theater}</li>
              <li>상영시간 : {this.selectedSet.Time.start} ~ {this.selectedSet.Time.end}</li>
              <li>총 인원 : {this.count}</li>
            </ul>
            <Seatshow Seat={this.state.Seatinfo}/>
            <p>{this.count*9}.000 원</p>
            <button onClick={this.popupSeat.bind(this)}>이전</button>
            <button onClick={this.alertConfirm}>다음</button>
          </div>
        </div>
      </div>
    );
  }
}

Seatbook.propTypes = {
  Reload: PropTypes.bool.isRequired,
  onPopupSeat: PropTypes.func.isRequired
}

export default Seatbook;
