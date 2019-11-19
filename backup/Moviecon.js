import React, { Component } from 'react';
import './Moviecon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import poster1 from './img/poster1.jpg';
import poster2 from './img/poster2.jpg';
import poster3 from './img/poster3.jpg';

class Moviecon extends Component {
    render() {
        return (
            <div className="Moviecontents">
                <div className="Feature-movies">
                <h2>Feature Movies</h2>
                <Container>
                    <Row>
                        <Col><img src={poster1} width="100%"/></Col>
                        <Col><img src={poster2} width="100%" height="192%"/></Col>
                    </Row>
                    <Row>
                        <Col><img src={poster3} width="47%"/></Col>
                    </Row>
                    <Row>
                        <Col><img src={poster1} width="100%" height="50%"/></Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}

export default Moviecon;