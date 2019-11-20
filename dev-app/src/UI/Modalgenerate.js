import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import ModalWithGrid from './ModalWithGrid';
import './Modalgenerate.css';

class Modalgenerate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    render() {
        return (
            <div className="Modalgenerate">
                <ButtonToolbar>
                <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
                    Launch modal with grid
                </Button>
            
                <ModalWithGrid show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} />
                </ButtonToolbar>
            </div>
          );
    }
}

export default Modalgenerate;