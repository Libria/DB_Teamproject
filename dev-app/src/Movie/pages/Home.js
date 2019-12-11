import React from 'react';
import Selector from './Selector';
import './Home.css';

import { Button } from "reactstrap";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selector: false
        };

        this.toggleSelector = this.toggleSelector.bind(this);
    }

    toggleSelector() {
        if (this.state.selector === true) {
            this.setState({selector: false});
        } else {
            this.setState({selector: true})
        }
    }

    render() {
        return (
            <div className="Home">
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#"
                  id="upgrade-to-pro"
                  onClick={this.toggleSelector}
                >
                  <p>Fast book</p>
                </Button>
                <div className="SelectorModal"
                style={{display: this.state.selector ? 'block' : 'none'}}>
                    <Selector Reload={this.state.selector}
                    onToggleSelector={this.toggleSelector}></Selector>
                </div>
            </div>
        );
    }
}

export default Home;