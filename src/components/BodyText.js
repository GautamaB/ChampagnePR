import React from "react";
import { Row, Col } from "reactstrap";

const bodyText = () => {
  return (
    <Row>
      <Col sm="4">
        <img
          class="image"
          src="image/raisin vert.png"
          alt="raisin vert"
          style={{ height: "620px", width: "535px", position: "relative" }}
        />
      </Col>
      <Col
        sm="4"
        style={{
          marginTop: "-255px",
          backgroundColor: "white",
          border: "solid",
          textAlign: "center"
        }}
      >
        <h1>Champagne Patrick Regnault</h1>
        <h2> un peu d'histoire</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat.
        </p>
      </Col>
      <Col sm="4" style={{ paddingLeft: "0px" }}>
        <img
          class="image"
          src="image/raisin noir.jpg"
          alt="raisin noir"
          style={{
            height: "620px",
            width: "530px",
            position: "relative",
            paddingLeft: "0px"
          }}
        />
      </Col>
    </Row>
  );
};

export default bodyText;
