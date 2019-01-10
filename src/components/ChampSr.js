import React from "react";
import ModalChamSr from "./ModalChamSr";

import { Container, Row, Col } from "reactstrap";

const bouteille = () => {
  return (
    <div>
      <div
        style={{ paddingBottom: "35px" }}
        id="Les Bouteilles de Stéphane Regnault"
      />
      <h1
        style={{
          size: "20px",
          textAlign: "center",
          color: "#D5B23C",
          marginTop: "25px",
          marginBottom: "25px"
        }}
      >
        Les Bouteilles de Stéphane Regnault
      </h1>
      <Container>
        <Row>
          <Col xs="12" md={{ size: 3, offset: 1 }}>
            <img src="/image/champagne1.jpg" alt="champagne" style={{}} />
            <ModalChamSr />
          </Col>
          <Col xs="12" md={{ size: 3, offset: 1 }}>
            <img src="/image/champagne2.jpg" alt="champagne" style={{}} />
            <ModalChamSr />
          </Col>
          <Col xs="12" md={{ size: 3, offset: 1 }}>
            <img src="/image/champagne3.jpg" alt="champagne" style={{}} />
            <ModalChamSr />
          </Col>
        </Row>
      </Container>
      {/* <img
        src="/image/bouteille.jpg"
        alt="bouteille de Patrick Regnault"
        style={{
          width: "50%",
          marginTop: "55px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block"
        }}
      /> */}
    </div>
  );
};

export default bouteille;
