import React from "react";
import { Row, Col } from "reactstrap";

const bodyText = ({
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
          src={pictureLeft}
          alt={altLeft}
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
          borderTop: "none",
          borderBottom: "none"
        }}
      >
        <div id={titre} style={{ paddingTop: "65px", marginTop: "-65px" }} />
        <h2
          style={{ marginTop: "15px", marginBottom: "100px", color: "#387001" }}
        >
          {titre}
        </h2>

        <p
          style={{
            textAlign: "justify",
            paddingLeft: "15px",
            paddingRight: "15px"
          }}
        >
          {text}
        </p>
      </Col>
      <Col xs="6" sm="4" style={{ paddingLeft: "0px" }}>
        <img
          className="image"
          src={pictureRight}
          alt={altRight}
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

export default bodyText;
