import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={2}>logo</Col>
          <Col lg={10}>
            <Link to="/">home</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
