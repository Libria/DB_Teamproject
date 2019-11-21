import React from 'react';

import { Seats2 } from '../Seat/Seatinfo2';
import Seateach from '../Seat/Seateach';

import Seatshow from '../Seat/Seatshow';

import '../Seat/Seatbook.css'


class Seatbook extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      Seatinfo: []
    }

    this.count = 0;
  }

  componentDidMount() {
    this.setState({Seatinfo: Seats2});
  }

  handleClick(row, col) {
    var tmp = this.state.Seatinfo;
    // colnum : 10 , Seatinfo2와 같게
    var index = 10 * (row - 1) + col - 1;
    if (tmp[index].Bookings === 'ava') {
      tmp[index].Bookings = 'sel'
      this.count += 1;
      return this.setState({Seatinfo: tmp});
    } else if (tmp[index].Bookings === 'sel') {
      tmp[index].Bookings = 'ava'
      this.count -= 1;
      return this.setState({Seatinfo: tmp});
    }
  }

  render() {
    return (
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
          <h1>영화 이미지 자리</h1>
          <ul>
            <li>영화관 이름 자리</li>
            <li>영화 시간 자리</li>
            <li>총 인원 : {this.count}</li>
          </ul>
          <Seatshow Seat={this.state.Seatinfo}/>
          <p>{this.count*9}.000 원</p>
          <button></button>
          <button></button>
        </div>
      </div>
    );
  }
}

export default Seatbook;
