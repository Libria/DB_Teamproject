import React from 'react';

import { Seats } from '../Seat/Seatinfo';
import Seatconstructor from '../Seat/Seatconstructor';


class Seatbook extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      Seatinfo: Seats
    }
  }

  handleClick(row, col) {
    var tmp = this.state.Seatinfo;
    console.log("tmp");
    console.log(tmp[0]);
    console.log(tmp[0].Bookings);
    if (tmp[row].Bookings[col-1] = 'ava') {
      tmp[row].Bookings[col-1] = 'sel'
    } else if (tmp[row-1].Bookings[col-1] = 'sel') {
      tmp[row].Bookings[col-1] = 'ava'
    }
    this.setState({Seatinfo: tmp});
  }

  render() {
    return (
      <div className="Seatbook">
        <h1>hello</h1>
        {this.state.Seatinfo.map(current => {
          return (
            <Seatconstructor key={current.Row}
            onhandleClick={this.handleClick}
            Seats={current}/>
          )
        })}
      </div>
    );
  }
}

export default Seatbook;
