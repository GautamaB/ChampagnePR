import React from "react";

import { Container, Row, Col } from "reactstrap";

const ChampSrBouteille = () => {
  return (
    <Container
      style={{
        backgroundColor: " #e0e0d1",
        height: "500px"
      }}
    >
      <Row>
        <Col
          xs={{ size: 6 }}
          md={{ size: 6 }}
          style={{
            color: "white",
            marginTop: "75px",
            fontSize: "20px"
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginLeft: "15px"
            }}
          >
            Brut et extra brut blanc de blancs
          </h2>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "15px"
            }}
          >
            Un ensemblage complexe
            <br />
            <strong>9g</strong> le dosage traditionnel, plansant et frais
            <br />
            <strong>7g</strong> un juste milieu pour les amateurs cherchant de
            nouvelles sansations
            <br />
            <strong>5g</strong> de vin presque nature, un chardonnay vrai sans
            pudeur
          </div>
        </Col>
        <Col xs={{ size: 4 }} md={{ size: 5 }}>
          <img
            src="/image/Bouteille Sr.jpg"
            alt="champagne"
            style={{ marginTop: "50px", width: "525px", height: "400px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ChampSrBouteille;
