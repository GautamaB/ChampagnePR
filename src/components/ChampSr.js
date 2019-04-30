import React from "react";
import { Parallax } from "react-parallax";

import { Row, Col } from "reactstrap";

const bouteille = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2
            style={{
              fontSize: "25px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "5%",
              marginBottom: "2%"
            }}
          >
            Les Bouteilles de Stéphane Regnault
          </h2>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#fff6db" }}>
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/Lydien.png"}
            bgImageAlt="Lydien 14"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
        <Col
          xs={{ size: 5 }}
          md={{ size: 3 }}
          style={{
            color: "black",
            marginLeft: "3%"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#091176",
                marginBottom: "3%",
                textAlign: "center",
                transform: "rotate(-5deg)"
              }}
              id="titreChamp"
            >
              Dorien N°14
            </h2>
            <p
              className="responsive"
              style={{
                textAlign: "center"
              }}
            >
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
              <br />
              <br />
              Nullam nec lectus viverra,
              <br />
              sagittis est eu, hendrerit diam.
              <br />
              <br />
              Sed eget semper risus,
              <br />
              vel consequat est.
            </p>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "165px"
              }}
            >
              <img
                src="/image/Dorien 14.png"
                alt="Dorien 14"
                style={{
                  width: "100px",
                  height: "140px",
                  float: "left"
                }}
              />
              <p
                className="resize"
                style={{
                  color: "#091176",
                  transform: "rotate(-10deg)",
                  marginLeft: "110px"
                }}
              >
                Lorem & <br />
                ipsum
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#fff6db" }}>
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/Lydien.png"}
            bgImageAlt="Lydien n°14"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
        <Col
          xs={{ size: 5 }}
          md={{ size: 3 }}
          style={{
            color: "black",
            marginLeft: "3%"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#091176",
                marginBottom: "3%",
                textAlign: "center",
                transform: "rotate(-5deg)"
              }}
              id="titreChamp"
            >
              Lydien N°14
            </h2>
            <p
              className="responsive"
              style={{
                textAlign: "center"
              }}
            >
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
              <br />
              <br />
              Nullam nec lectus viverra,
              <br />
              sagittis est eu, hendrerit diam.
              <br />
              <br />
              Sed eget semper risus,
              <br />
              vel consequat est.
            </p>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "175px"
              }}
            >
              <img
                src="/image/Lydien 14.png"
                alt="Lydien 14"
                style={{
                  width: "100px",
                  height: "140px",
                  float: "left"
                }}
              />
              <p
                className="resize"
                style={{
                  color: "#091176",
                  marginLeft: "110px",
                  transform: "rotate(-10deg)"
                }}
              >
                Lorem & <br />
                ipsum
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#fff6db" }}>
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/Mixolydien.png"}
            bgImageAlt="Mixolydien n°14"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
        <Col
          xs={{ size: 5 }}
          md={{ size: 3 }}
          style={{
            color: "black",
            marginLeft: "3%"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#091176",
                marginBottom: "3%",
                textAlign: "center",
                transform: "rotate(-5deg)"
              }}
              id="titreChamp"
            >
              Mixolydien N°14
            </h2>
            <p
              className="responsive"
              style={{
                textAlign: "center"
              }}
            >
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
              <br />
              <br />
              Nullam nec lectus viverra,
              <br />
              sagittis est eu, hendrerit diam.
              <br />
              <br />
              Sed eget semper risus,
              <br />
              vel consequat est.
            </p>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "175px"
              }}
            >
              <img
                src="/image/Mixolydien 14.png"
                alt="Mixolydien 14"
                style={{
                  width: "100px",
                  height: "140px",
                  float: "left"
                }}
              />
              <p
                className="resize"
                style={{
                  color: "#091176",
                  marginLeft: "110px",
                  transform: "rotate(-10deg)"
                }}
              >
                Lorem & <br />
                ipsum
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default bouteille;
