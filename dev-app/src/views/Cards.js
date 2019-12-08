import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5 flex">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title}
          </h5>
          <button className="btn btn-primary blue">
            Booking
          </button>
        </div>
      </div>
    );
  }
}

export default MovieCard;