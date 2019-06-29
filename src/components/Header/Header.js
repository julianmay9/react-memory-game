import React from "react";
import { Col, Row, Container } from "../Grid";
import "./Header.css";

const Header = props => (
  <Container fluid>
    <Row>
      <Col size="md-1"></Col>
      <Col size="md-10" className="header">
        <div className="logo"></div>
        <br/>
        <div className="title">LMFAO - Every day I'm shuffling</div>
        <div className="instructions">Heraclitus of Ephesus (535 BC - 475 BC): "You cannot click on the same muppet twice."</div>
        <br/>
        <div className="summary">Simple, right? Keep clicking new muppets. Score points for each new muppet you click. But be careful: you CANNOT CLICK THE SAME MUPPET TWICE! ...............................Well, you can. But only if you want to lose.</div>
        <br/>
        <br/>
      </Col>
      <Col size="md-1"></Col>
    </Row>
    <Row>
      <Col size="md-1"></Col>
      <Col size="md-10">
        <div className="scores">
          [ SCORE: {props.score} ] --- [ HIGH SCORE: {props.highscore} ]
        </div>
        <br/>
      </Col>
      <Col size="md-1"></Col>
    </Row>
  </Container>
);

export default Header;
