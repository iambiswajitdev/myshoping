import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import cartImg from "../images/cart.png";

const Header = () => {
  const logo = logoImg;
  const cart = cartImg;

  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg={2} xs={6}>
            <Link to="/">
              <img className="logoImg" src={logo} alt="" />
            </Link>
          </Col>
          <Col lg={9} xs={3}>
            <div className="navBar">
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={1} xs={3}>
            <Link to="/">
              <img className="cartImg" src={cart} alt="" />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
