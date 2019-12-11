import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

export class MovieCard extends Component {
  getTitle(title) {
    if (title.length > 10) {
      return title.slice(0,10) + '...'
    } else {
      return title
    }
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5 flex">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover"
          width="210px" height="300px"/>
          <h5 className="text-light card-title" className="CardsTitle">
            {this.getTitle(movie.Title)}
          </h5>
          <p className="CardsSummary">{movie.summary}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
//movie.Title.slice(0,10)