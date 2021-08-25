import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="footerHeading">
              Made with ❤️ by Biswajit Mondal @ 2021 . Built with React JS
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
