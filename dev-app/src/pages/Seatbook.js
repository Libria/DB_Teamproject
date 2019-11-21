import React from 'react';

import SeatConstructor from '../Seat/SeatConstructor';
import { Seats } from '../Seat/Seatinfo';

import Modalgenerate from '../UI/Modalgenerate';


class Seatbook extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <div className="Seats">
            {Seats.map(current =>
              <SeatConstructor key={current.Id} Row={current.Row} Cols={current.Cols} Bookings={current.Bookings}/>
            )}
        </div>
        <div className="Modal">
            <Modalgenerate></Modalgenerate>
        </div>
      </div>
    );
  }
}

export default Seatbook;
