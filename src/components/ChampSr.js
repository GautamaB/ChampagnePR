import React from "react";

import { Container, Row, Col } from "reactstrap";

const bouteille = () => {
  return (
    <Row>
      <Col>
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
        <Container
          style={{
            backgroundColor: " #e0e0d1",
            height: "500px",
            padingTop: "15px"
          }}
        >
          <Row>
            <Col xs={{ size: 4 }} md={{ size: 2, offset: 1 }}>
              <img
                src="/image/champagne1.jpg"
                alt="champagne"
                style={{ marginTop: "50px", width: "150px", height: "400px" }}
              />
            </Col>
            <Col
              xs={{ size: 8 }}
              md={{ size: 8 }}
              style={{
                color: "white",
                marginTop: "75px",
                fontSize: "24px"
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                Brut et extra brut blanc de blancs
              </h2>
              Un ensemblage complexe
              <br />
              <strong>9g</strong> le dosage traditionnel, plansant et frais
              <br />
              <strong>7g</strong> un juste milieu pour les amateurs cherchant de
              nouvelles sansations
              <br />
              <strong>5g</strong> de vin presque nature, un chardonnay vrai sans
              pudeur
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default bouteille;
