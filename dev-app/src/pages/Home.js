import React from 'react';
import Selector from './Selector';
import './Home.css';

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
                <button onClick={this.toggleSelector}>빠른 예매</button>
                <div className="SelectorModal"
                style={{display: this.state.selector ? 'block' : 'none'}}>
                    <Selector Reload={this.state.selector}></Selector>
                </div>
            </div>
        );
    }
}

export default Home;