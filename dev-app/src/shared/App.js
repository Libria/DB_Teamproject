import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Seatbook, Home } from '../pages';
import Menu from '../manage/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Route exact path="/" component={Home} />
                <Route path="/Seatbook" component={Seatbook} />
            </div>
        );
    }
}

export default App;