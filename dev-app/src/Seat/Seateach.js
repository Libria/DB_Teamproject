import React from 'react';

class Seateach extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(row, col) {
        this.props.onhandleClick(row,col);
    }
    
    buttonMaiking() {
        if (this.props.Seat === 'ava') {
            //onClick={this.handleClick(this.props.Row-1,this.props.Col-1)}
            return (
                <button className="Available" onClick={this.handleClick(this.props.Row-1,this.props.Col-1)}>
                    R{this.props.Row}C{this.props.Col+1}
                </button>
            )
        } else if (this.props.Seat === 'sel') {
            return (
                <button className="Selected">R{this.props.Row}C{this.props.Col+1}
                </button>
            )
        } else if (this.props.Seat === 'dis') {
            return (
                <button className="Disable" disabled="disabled">
                    dis
                </button>
            )    
        } else {
            return (
                <button className="Null" disabled="disabled">
                    null
                </button>
            )    
        }
    }

    render() {
        return (
            this.buttonMaiking()
        );
    }
}

export default Seateach;