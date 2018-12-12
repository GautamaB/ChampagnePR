import React from "react";
import { Row, Col } from "reactstrap";

const bodyText = ({titrePrinc, titre, text, pictureLeft, pictureRight, altLeft, altRight}) => {
  return (
    <div>
      <Row>
        <Col xs="6" sm="4">
          <img
            className="image"
            src={pictureLeft}
            alt={altLeft}
            style={{ height: "620px", width: "440px", position: "relative" }}
          />
        </Col>
        <Col
          xs="6" sm="4"
          style={{
            marginTop: "-255px",
            backgroundColor: "white",
            // border: "solid",
            textAlign: "center"
          }}
        >
          <h1 style={{ marginTop: "25px" }}>{titrePrinc}</h1>
          <h2 style={{ marginTop: "300px", marginBottom:"100px" }} id={titre}> {titre}</h2>

          <p>{text}</p>
        </Col>
        <Col xs="6" sm="4" style={{ paddingLeft: "0px" }}>
          <img
            className="image"
            src={pictureRight}
            alt={altRight}
            style={{
              height: "620px",
              width: "440px",
              position: "relative",
              paddingLeft: "0px"
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default bodyText;
