import React from "react";

import { Row, Col } from "reactstrap";

const bouteille = () => {
  return (
    <Row>
      <Col>
        <div style={{ paddingBottom: "35px" }} />
        <h2
          style={{
            size: "20px",
            textAlign: "center",
            color: "#D5B23C",
            marginTop: "25px",
            marginBottom: "25px"
          }}
        >
          Les Bouteilles de Stéphane Regnault
        </h2>
        <Row
          style={{
            height: "500px",
            padingTop: "15px"
          }}
        >
          <Col
            xs={{ size: 6, offset: 0 }}
            md={{ size: 4, offset: 1 }}
            style={{
              color: "black",
              fontSize: "24px"
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "green",
                marginLeft: "65px",
                marginTop: "25px"
              }}
            >
              Brut et extra brut blanc de blancs
            </h2>
            <p style={{ fontSize: "12x", textAlign: "center" }}>
              Un ensemblage complexe
              <br />
              <strong>9g</strong> le dosage traditionnel, plansant et frais
              <br />
              <strong>7g</strong> un juste milieu pour les amateurs cherchant de
              nouvelles sansations
              <br />
              <strong>5g</strong> de vin presque nature, un chardonnay vrai sans
              pudeur
            </p>
            <br />
            <img src="/image/brut.png" alt="brut" />
            <p style={{ float: "right", color: "green", marginLeft: "-25px" }}>
              vicité et Minéralité
            </p>
          </Col>
          <Col xs={{ size: 6 }} md={{ size: 6 }}>
            <img
              src="/image/Bouteille Sr.jpg"
              alt="champagne"
              style={{ width: "650px", height: "450px" }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default bouteille;
