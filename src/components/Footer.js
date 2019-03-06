import React from "react";
import Form from "./Form";
import GoogleMap from "./GoogleMap";
import "../App.css";

import { Row, Col } from "reactstrap";

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
      <Row>
        <Col xs={{ size: 10, order: 1 }} md={{ size: 5, offset: 1, order: 1 }}>
          <div style={{ paddingBottom: "65px" }} id="Contact" />
          <h1 style={{ paddingLeft: "25px" }}>Contact : </h1>
          <div
            class="overlay-image"
            style={{ padding: " 25px  0px 55px 25px " }}
          >
            <img
              className="image"
              src="image/logo.png"
              alt="logo"
              style={{ width: "550px", height: "450px" }}
            />
            <div className="text" style={{ margin: "-200px 0 0 -5px" }}>
              <p1 style={{ color: "grey" }}>
                <strong>CHAMPAGNE</strong>
              </p1>
              <br />
              <br />
              <p>
                <strong
                  style={{
                    color: "black",
                    fontFamily: "Dancing Script",
                    fontSize: "35px"
                  }}
                >
                  Patrick Regnault
                </strong>
              </p>
              <br />
              <strong>
                45 Grande Rue <br />
                51190 LE MESNIL-sur-OGER <br />
              </strong>
              <br />
              Tél. : 03 26 57 54 50
              <br /> e-mail : champagne-p-regnault@orange.fr
            </div>
          </div>
          <Form />
        </Col>
        <Col xs={{ size: 10, order: 2 }} md={{ size: 5, order: 2 }}>
          <div style={{ marginTop: "85px" }}>
            <GoogleMap />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default footer;
