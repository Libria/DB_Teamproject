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

  componentDidMount() {
    console.log(this.state.Seatinfo);
  }

  generateSeatSet() {

  }

  handleClick(row, col) {
    var tmp = this.state.Seatinfo;
    if (tmp[row-1].Bookings[col-1] = 'ava') {
      tmp[row-1].Bookings[col-1] = 'sel'
    } else if (tmp[row-1].Bookings[col-1] = 'sel') {
      tmp[row-1].Bookings[col-1] = 'ava'
    }
    this.setState({Seatinfo: tmp});
  }

  render() {
    console.log(this.state.Seatinfo);
    return (
      <div className="Seatbook">
        <h1>hello</h1>
        {this.state.Seatinfo.map(current => {
          return (
            <Seatconstructor
            onhandleClick={this.handleClick}
            Seats={current}/>
          )
        })}
      </div>
    );
  }
}

export default Seatbook;
