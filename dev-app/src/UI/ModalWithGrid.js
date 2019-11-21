import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import SeatConstructor from '../Seat/SeatConstructor';
import { Seats } from '../Seat/Seatinfo';
import Seatlist from '../Seat/Seatlist';

import { Detecting } from '../Seat/Seat';

function ModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" animation={false}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          빠른 예약
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col className="show-map">
              <code><div className="Seats">
            {Seats.map(current =>
              <SeatConstructor key={current.Id} Row={current.Row} Cols={current.Cols} Bookings={current.Bookings}/>
            )}
              </div></code>
            </Col>
            <Col className="show-result">
              <h3 id="resultname">선택 좌석</h3>
              <Form.Control as="select" multiple>
                <Seatlist></Seatlist>
            </Form.Control>
            </Col>
          </Row>
          {/* 
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>.col-xs-6 .col-md-4</code>
            </Col>
            <Col xs={6} md={4}>
              <code>.col-xs-6 .col-md-4</code>
            </Col>
            <Col xs={6} md={4}>
              <code>.col-xs-6 .col-md-4</code>
            </Col>
          </Row>
          */}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWithGrid;