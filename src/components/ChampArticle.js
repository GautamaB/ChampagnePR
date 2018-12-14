import React from "react";
import { Row, Col } from "reactstrap";

const ChampArticle = ({
  titrePrinc,
  titre,
  text,
  pictureLeft,
  pictureRight,
  altLeft,
  altRight
}) => {
  return (
    <Row>
      <Col xs="6" sm="4">
        <img
          className="image"
          src="image/raisin vert.png"
          alt="raisin vert"
          style={{
            height: "600px",
            width: "420px",
            position: "relative",
            borderRadius: "25px",
            border: "10px solid white"
          }}
        />
      </Col>
      <Col
        xs="6"
        sm="4"
        style={{
          backgroundColor: "white",
          borderStyle: "double",
          borderWidth: "5px",
          borderColor: "#B0A64D",
          textAlign: "center",
          borderTop: "none"
        }}
      >
        <div id="Le Champagne" />
        <h2
          style={{
            marginTop: "40px",
            marginBottom: "100px",
            color: "#387001"
          }}
        >
          Le Champagne
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
      <Col xs="6" sm="4" style={{ paddingLeft: "0px" }}>
        <img
          className="image"
          src="image/raisin noir.jpg"
          alt="raisin noir"
          style={{
            height: "600px",
            width: "420px",
            position: "relative",
            paddingLeft: "0px",
            borderRadius: "25px",
            border: "10px solid white"
          }}
        />
      </Col>
    </Row>
  );
};

export default ChampArticle;
