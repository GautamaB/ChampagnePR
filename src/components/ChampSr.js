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
              size: "20px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "25px",
              marginBottom: "25px"
            }}
          >
            Les Bouteilles de Stéphane Regnault
          </h2>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#fff6db" }}>
        <Col xs={{ size: 6 }} md={{ size: 7 }}>
          <Parallax
            bgImage={"image/Lydien.png"}
            bgImageAlt="Lydien 14"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
        <Col
          xs={{ size: 6, offset: 0 }}
          md={{ size: 4 }}
          style={{
            color: "black",
            marginLeft: "50px"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#091176",
                marginTop: "15px",
                marginBottom: "25px",
                textAlign: "center",
                transform: "rotate(-5deg)"
              }}
              id="titreChamp"
            >
              Dorien N°14
            </h2>
            <p
              style={{
                fontSize: "11px",
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
            <div>
              <img
                src="/image/Dorien 14.png"
                alt="Dorien 14"
                style={{
                  width: "100px",
                  height: "140px",
                  marginBottom: "5px",
                  marginLeft: "100px"
                }}
              />
              <p
                style={{
                  fontSize: "18px",
                  float: "right",
                  color: "#091176",
                  marginTop: "15px",
                  marginRight: "85px",
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
        <Col xs={{ size: 6 }} md={{ size: 7 }}>
          <Parallax
            bgImage={"image/Lydien.png"}
            bgImageAlt="Lydien n°14"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
        <Col
          xs={{ size: 6, offset: 0 }}
          md={{ size: 4 }}
          style={{
            color: "black",
            marginLeft: "50px"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#091176",
                marginTop: "15px",
                marginBottom: "25px",
                textAlign: "center",
                transform: "rotate(-5deg)"
              }}
              id="titreChamp"
            >
              Lydien N°14
            </h2>
            <p
              style={{
                fontSize: "12px",
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
            <div>
              <img
                src="/image/Lydien 14.png"
                alt="Lydien 14"
                style={{
                  width: "100px",
                  height: "140px",
                  marginBottom: "5px",
                  marginLeft: "100px"
                }}
              />
              <p
                style={{
                  fontSize: "18px",
                  float: "right",
                  color: "#091176",
                  marginTop: "15px",
                  marginRight: "85px",
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
        <Col xs={{ size: 6 }} md={{ size: 7 }}>
          <Parallax
            bgImage={"image/Mixolydien.png"}
            bgImageAlt="Mixolydien n°14"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
        <Col
          xs={{ size: 6, offset: 0 }}
          md={{ size: 4 }}
          style={{
            color: "black",
            marginLeft: "50px"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#091176",
                marginTop: "15px",
                marginBottom: "25px",
                textAlign: "center",
                transform: "rotate(-5deg)"
              }}
              id="titreChamp"
            >
              Mixolydien N°14
            </h2>
            <p
              style={{
                fontSize: "12px",
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
            <div>
              <img
                src="/image/Mixolydien 14.png"
                alt="Mixolydien 14"
                style={{
                  width: "100px",
                  height: "140px",
                  marginBottom: "5px",
                  marginLeft: "100px"
                }}
              />
              <p
                style={{
                  fontSize: "18px",
                  float: "right",
                  color: "#091176",
                  marginTop: "15px",
                  marginRight: "85px",
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
