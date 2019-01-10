import React from "react";
import { Row, Col } from "reactstrap";

const fisrtArticle = () => {
  return (
    <Row>
      <Col
        xs={{ size: 10 }}
        md={{ size: 4, order: 2 }}
        style={{
          marginTop: "-255px",
          backgroundColor: "white",
          borderStyle: "double",
          borderWidth: "5px",
          borderColor: "#B0A64D",
          textAlign: "center",
          borderBottom: "none"
        }}
      >
        <h1 style={{ marginTop: "5px", color: "#8B803E" }}>
          Champagne Patrick Regnault
        </h1>
        <div id="Un peu d'histoire" />
        <h2
          style={{
            marginTop: "160px",
            marginBottom: "100px",
            color: "#387001"
          }}
        >
          Un peu d'histoire
        </h2>

        <p
          style={{
            textAlign: "justify",
            paddingLeft: "15px",
            paddingRight: "15px"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat.
        </p>
      </Col>
      <Col xs="12" md={{ size: 4, order: 1 }}>
        <img
          className="image"
          src="/image/raisin vert.png"
          alt="raisin vert"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            borderRadius: "35px",
            border: "20px solid white"
          }}
        />
      </Col>
      <Col xs="12" md={{ size: 4, order: 3 }}>
        <img
          className="image"
          src="/image/raisin noir.jpg"
          alt="raisin noir"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            borderRadius: "35px",
            border: "20px solid white"
          }}
        />
      </Col>
    </Row>
  );
};

export default fisrtArticle;
