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
          margin: " 2% auto -46px auto",
          display: "block"
        }}
      />
      <p style={{ border: "3px solid #D5B23C" }} />
      <Row>
        <Col xs={{ size: 10, order: 1 }} md={{ size: 5, offset: 1, order: 1 }}>
          <div style={{ marginBottom: "13%" }} id="Contact" />
          <h1 style={{ marginLeft: "2%" }}>Contact : </h1>
          <div class="overlay-image">
            <div>
              <img
                className="image"
                src="image/logo.png"
                alt="logo"
                style={{ width: "60%", marginLeft: "16%", marginTop: "7%" }}
              />
            </div>
            <div
              className="text"
              style={{ marginTop: "16%", margin: "-170px 0 0 -5px" }}
            >
              <p className="footer" style={{ color: "grey" }}>
                <strong>CHAMPAGNE</strong>
              </p>
              <p className="footerName">
                <strong
                  style={{
                    color: "black",
                    fontFamily: "Dancing Script"
                  }}
                >
                  Patrick Regnault
                </strong>
              </p>
              <p className="footer">
                <strong>
                  45, Grande Rue <br />
                  51190 LE MESNIL-sur-OGER <br />
                </strong>
                <br />
                Tél. : 03 26 57 54 50
                <br /> e-mail : champagne-p.regnault@orange.fr
              </p>
            </div>
          </div>
          <Form />
        </Col>
        <Col xs={{ size: 10, order: 2 }} md={{ size: 5, order: 2 }}>
          <GoogleMap />
        </Col>
      </Row>
    </div>
  );
};
export default footer;
