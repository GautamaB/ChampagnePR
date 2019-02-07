import React from "react";
import Form from "./Form";
import GoogleMap from "./GoogleMap";

import { Container, Row, Col } from "reactstrap";

const footer = () => {
  return (
    <div>
      <img
        src="/image/capsule.jpg"
        alt="capsule de Patrick Regnault"
        style={{
          borderRadius: "50px",
          border: "5px solid #D5B23C",
          width: "90px",
          height: "90px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginTop: "25px",
          marginBottom: "-50px"
        }}
      />
      <p style={{ border: "3px solid #D5B23C" }} />
      <Container>
        <Row>
          <Col
            xs={{ size: 10, order: 1 }}
            md={{ size: 5, offset: 1, order: 1 }}
          >
            <div style={{ paddingBottom: "65px" }} id="Contact" />
            <h1>Contact : </h1>
            <p style={{ marginLeft: "20px" }}>
              REGNAULT PATRICK
              <br />
              45 Grande rue
              <br />
              51190 Le Mesnil sur Oger
              <br />
              Téléphone : 03 26 57 54 50
              <br />
              Email : champagne-p-regnault@orange.fr
            </p>
            <Form />
          </Col>
          <Col
            xs={{ size: 10, order: 2 }}
            md={{ size: 5, offset: 1, order: 2 }}
          >
            <div style={{ marginTop: "85px" }}>
              <GoogleMap />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default footer;
