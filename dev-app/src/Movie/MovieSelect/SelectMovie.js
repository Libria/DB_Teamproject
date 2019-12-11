import React from 'react';
import './SelectMovie.css';
import PropTypes from 'prop-types';
import { MovieSet } from './SampleSet';
import axios from 'axios';

class SelectMovie extends React.Component {
    constructor(props) {
        super(props);

        this.cancelSelectMovie = this.props.onCancelSelectMovie.bind(this);
        this.selectAll = this.props.onSelectAll.bind(this);
        this.chooseMovie = this.props.onChooseMovie.bind(this);
        this.confirmMovie = this.props.onConfirmMovie.bind(this);
        this.tmpSelected = this.props.tmpSelected;

        this.movies = [];
    }
    /*
    getMovie = async() => {
        const movie = await axios.get("http://127.0.0.1:8000/movie/serializer/movie/?format=json");
        this.movies = movie.data;
    }

    componentDidMount() {
        this.getMovie();
    }
    */

    componentDidMount() {
        this.movies = MovieSet;
    }

    cancelSelectMovie() {
        this.props.onHandleClick();
    }

    chooseMovie(index) {
        this.props.onChooseMovie(index);
    }

    selectAll() {
        this.props.onSelectAll();
    }

    confirmMovie() {
        this.props.onConfirmMovie();
    }

    getTitle(title) {
        if (title.length > 15) {
            return title.slice(0,15) + '...';
        } else {
            return title;
        }
    }

    renderMovieSet(current) {
        if (this.tmpSelected.includes(current.id)) {
            return (
                <div className="SelectMovSet" key={current.id}>
                    <button onClick={this.chooseMovie.bind(this, current.id)} id="AlreadyMov">
                    <img src={current.medium_cover_image} alt={current.title} width="130px" height="190px" ></img>
                    <p><span className={'SelMov' + current.age}>{current.age}</span>{this.getTitle(current.title)}</p>
                    </button>
                </div>
            );
        } else {
            return (
                <div className="SelectMovSet" key={current.id}>
                    <button onClick={this.chooseMovie.bind(this, current.id)}>
                    <img src={current.medium_cover_image} alt={current.title} width="130px" height="190px" ></img>
                    <p><span className={'SelMov' + current.age}>{current.age}</span>{this.getTitle(current.title)}</p>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="SelectMovie">
                <div className="SelectMovNav">
                    <h2>모든 영화</h2>
                    <button id="SelMovCancel" onClick={this.cancelSelectMovie}>취소</button>
                    <button id="SelMov" onClick={this.confirmMovie}>확인</button>
                </div>
                <div><button id="SelMovAll" onClick={this.selectAll}>All</button></div>
                <div className="SelectMovContent">
                    {this.movies.map(current => {
                        return (this.renderMovieSet(current))
                    })}
                </div>
            </div>
        );
    }
}

SelectMovie.propTypes = {
    onCancelSelectMovie: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onChooseMovie: PropTypes.func.isRequired,
    onConfirmMovie: PropTypes.func.isRequired,
    tmpSelected: PropTypes.array.isRequired
}

export default SelectMovie;