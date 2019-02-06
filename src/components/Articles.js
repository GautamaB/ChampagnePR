import React from "react";
import { Container, Row, Col } from "reactstrap";

const Articles = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 4, order: 1 }}>
          <div
            style={
              {
                // width: " 100%",
                // height: "100%",
                // position: "relative",
                // overflow: "hidden",
                // fontSize: "16px",
              }
            }
          >
            <img
              src="image/9.jpg"
              data-speed="-1.5"
              className="img-parallax"
              alt=""
              style={{
                width: "80vmax",
                zIndex: "-1",
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%, 0)",
                pointerEvents: "none",
                height: "100%"
              }}
            />
          </div>
        </Col>{" "}
        <Col md={{ size: 4, order: 3 }}>
          <img
            src="image/14.jpg"
            data-speed="-1.5"
            className="img-parallax"
            alt=""
            style={{
              width: "80vmax",
              zIndex: "-1",
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%, 0)",
              pointerEvents: "none",
              height: "100%"
            }}
          />
        </Col>
        <Col md={{ size: 4, order: 2 }}>
          <div
            style={{
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "5px",
              backgroundColor: "#fff6db",
              borderBottom: "none"
            }}
          >
            <img
              src="image/logo facture.png"
              alt=""
              style={{
                marginTop: "25px",
                marginBottom: "55px",
                /* width: 100px; */
                height: "105px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }}
            />
            <h2
              style={{
                textAlign: "center",
                marginTop: "25px",
                color: "#000000"
              }}
            >
              Une viticulture durable et respectueuse de l'environnement
            </h2>
            <p
              style={{
                textAlign: "center",
                marginTop: "75px",
                fontsize: "28px",
                marginBottom: "185px",
                color: "#000000"
              }}
            >
              La protection de l'environnement est au coeur de toutes les
              discutions. Si nous ne changeons pas notre approche à
              l'environnement, qu'allons nous léguer à nos futurs générations?
              Depuis 2005, nous avons choisi de modifier en profondeur nos
              méthodes de travail. Le respect du sol est la base d'une
              viticulture saine. Pour avoir de bon raisin, la vigne doit se
              sentir bien dans son milieu. Notre vignoble est désherbé
              mécaniquement pour limiter plus que fortement l'utilisation de
              désherbant chimique.
            </p>
            <img
              src="image/lion.png"
              alt="logo"
              style={{
                opacity: "0.3",
                width: "100px",
                height: "100px",
                float: "right",
                transform: "rotate(-30deg)"
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr style={{ background: "black", marginBottom: "100px" }} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 4, order: 1 }}>
          <div
            style={
              {
                // width: " 100%",
                // height: "100%",
                // position: "relative",
                // overflow: "hidden",
                // fontSize: "16px",
              }
            }
          >
            <img
              src="image/9.jpg"
              data-speed="-1.5"
              className="img-parallax"
              alt=""
              style={{
                width: "80vmax",
                zIndex: "-1",
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%, 0)",
                pointerEvents: "none",
                height: "100%"
              }}
            />
          </div>
        </Col>{" "}
        <Col md={{ size: 4, order: 3 }}>
          <img
            src="image/14.jpg"
            data-speed="-1.5"
            className="img-parallax"
            alt=""
            style={{
              width: "80vmax",
              zIndex: "-1",
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%, 0)",
              pointerEvents: "none",
              height: "100%"
            }}
          />
        </Col>
        <Col md={{ size: 4, order: 2 }}>
          <div
            style={{
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "5px",
              backgroundColor: "#fff6db",
              borderBottom: "none"
            }}
          >
            <img
              src="image/logo facture.png"
              alt=""
              style={{
                marginTop: "25px",
                marginBottom: "55px",
                /* width: 100px; */
                height: "105px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }}
            />
            <h2
              style={{
                textAlign: "center",
                marginTop: "25px",
                color: "#000000"
              }}
            >
              Une viticulture durable et respectueuse de l'environnement
            </h2>
            <p
              style={{
                textAlign: "center",
                marginTop: "75px",
                fontsize: "28px",
                marginBottom: "185px",
                color: "#000000"
              }}
            >
              La protection de l'environnement est au coeur de toutes les
              discutions. Si nous ne changeons pas notre approche à
              l'environnement, qu'allons nous léguer à nos futurs générations?
              Depuis 2005, nous avons choisi de modifier en profondeur nos
              méthodes de travail. Le respect du sol est la base d'une
              viticulture saine. Pour avoir de bon raisin, la vigne doit se
              sentir bien dans son milieu. Notre vignoble est désherbé
              mécaniquement pour limiter plus que fortement l'utilisation de
              désherbant chimique.
            </p>
            <img
              src="image/lion.png"
              alt="logo"
              style={{
                opacity: "0.3",
                width: "100px",
                height: "100px",
                float: "right",
                transform: "rotate(-30deg)"
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr style={{ background: "black", marginBottom: "100px" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
