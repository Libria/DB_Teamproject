import React from 'react';
import './TheaterSelector.css';
import { Theaterinfo } from './Theaterinfo';
import SelectTheater from './SelectTheater';
import PropTypes from 'prop-types';

class TheaterSelector extends React.Component {
    constructor() {
        super();

        this.state = {
            Selected : [],
            tmpSelected : [],
            modal: false,
            dropdown: '',
            reload: false,
            sereload: false
        };

        this.moveSelectTheater = this.moveSelectTheater.bind(this);
        this.cancelSelectTheater = this.cancelSelectTheater.bind(this);
        this.confirmTheater = this.confirmTheater.bind(this);
        this.chooseTheater = this.chooseTheater.bind(this);
        this.selectAllTheater = this.selectAllTheater.bind(this);

        //
        this.showDropdown = this.showDropdown.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({reload: nextProps.Reload, sereload: nextProps.SeReload});
        this.checkReload();
    }

    checkReload() {
        if (this.state.reload === false && this.state.sereload === true) {
            this.selectAllTheater();
        }
    }

    moveSelectTheater() {
        this.setState({modal: true});
    }

    cancelSelectTheater() {
        var tmp = this.state;
        const tmplength = tmp.tmpSelected.length;
        for (var i=0; i<tmplength; i++) {
            if (tmp.Selected.includes(tmp.tmpSelected[i]) === false) {
                var j = tmp.tmpSelected.indexOf(tmp.tmpSelected[i]);
                tmp.tmpSelected.splice(j,1);
            }
        }
        tmp.modal = false;
        this.setState({tmp});
    }

    confirmTheater() {
        var tmp = [];
        for (var i=0; i<this.state.tmpSelected.length; i++) {
            tmp.push(this.state.tmpSelected[i]);
        }
        var s = [];
        tmp.map(current => {
            s.push(Theaterinfo[current-1]);
        });
        this.props.onSelectedConfirm('Theater', s);
        this.setState({Selected: tmp, modal: false});
    }

    selectAllTheater() {
        var tmp = this.state;
        const sellength = tmp.Selected.length;
        const tmplength = tmp.tmpSelected.length; 
        for (var i=0; i<sellength; i++) {
            tmp.Selected.pop();
        }
        for (i=0; i<tmplength; i++) {
            tmp.tmpSelected.pop();
        }
        tmp.modal = false;
        this.setState({tmp});
    }

    chooseTheater(index) {
        var tmp = this.state;
        if (tmp.tmpSelected.includes(index)) {
            var i = tmp.tmpSelected.indexOf(index);
            tmp.tmpSelected.splice(i,1);
        } else if (tmp.tmpSelected.length < 4) {
            tmp.tmpSelected.push(index);
        } else {
            alert("4개까지 선택 가능합니다.");
        }
        this.setState(tmp);
    }

    showDropdown(name) {
        var tmp = this.state;
        tmp.dropdown = name;
        this.setState(tmp);
    }

    renderTheater() {
        if (this.state.Selected.length === 0) {
            return (
                <div className="TheaterSelector">
                    <div className="TheaterSelNav">
                        <h2>극장</h2>
                        <button onClick={this.selectAllTheater}></button>
                    </div>
                    <div className="TheaterSelContent">
                        <button onClick={this.moveSelectTheater}>+</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                    </div>
                </div>
            );
        } else if (this.state.Selected.length === 1) {
            return (
                <div className="TheaterSelector">
                    <div className="TheaterSelNav">
                        <h2>극장</h2>
                        <button onClick={this.selectAllTheater}></button>
                    </div>
                    <div className="TheaterSelContent">
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[0]-1].name}</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                    </div>
                </div>
            );
        } else if (this.state.Selected.length === 2) {
            return (
                <div className="TheaterSelector">
                    <div className="TheaterSelNav">
                        <h2>극장</h2>
                        <button onClick={this.selectAllTheater}></button>
                    </div>
                    <div className="TheaterSelContent">
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[0]-1].name}</button>
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[1]-1].name}</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                    </div>
                </div>
            );
        } else if (this.state.Selected.length === 3) {
            return (
                <div className="TheaterSelector">
                    <div className="TheaterSelNav">
                        <h2>극장</h2>
                        <button onClick={this.selectAllTheater}></button>
                    </div>
                    <div className="TheaterSelContent">
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[0]-1].name}</button>
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[1]-1].name}</button>
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[2]-1].name}</button>
                        <button onClick={this.moveSelectTheater}>+</button>
                    </div>
                </div>
            );
        }  else if (this.state.Selected.length === 4) {
            return (
                <div className="TheaterSelector">
                    <div className="TheaterSelNav">
                        <h2>극장</h2>
                        <button onClick={this.selectAllTheater}></button>
                    </div>
                    <div className="TheaterSelContent">
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[0]-1].name}</button>
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[1]-1].name}</button>
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[2]-1].name}</button>
                        <button className="NotPlus" onClick={this.moveSelectTheater}
                        >{Theaterinfo[this.state.Selected[3]-1].name}</button>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderTheater()}
                <div className="modalTheater" style={{display: this.state.modal ? 'block': 'none'}}>
                    <SelectTheater
                    onCancelSelectTheater={this.cancelSelectTheater}
                    onConfirmTheater={this.confirmTheater}
                    tmpSelected={this.state.tmpSelected}
                    onChooseTheater={this.chooseTheater}
                    onShowDropdown={this.showDropdown}
                    Dropdown={this.state.dropdown}></SelectTheater>
                </div>
            </div>
        )
    }
}

TheaterSelector.propTypes = {
    Reload: PropTypes.bool.isRequired,
    SeReload: PropTypes.bool.isRequired
}

export default TheaterSelector;