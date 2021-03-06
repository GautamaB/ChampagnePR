import React from "react";
import { Parallax } from "react-parallax";

import { Row, Col } from "reactstrap";

const bouteille = () => {
  return (
    <div>
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
              className="titresr"
              style={{
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
              <strong>Cépage : </strong>chardonnay.
              <br />
              <strong>Parcelle :</strong> Le Moulin Oger — Grand Cru
              <br />
              Plein Est, pente douce 2%. Sol superficiel bien
              <br />
              structuré par un enherbement naturel.
              <br />
              Horizon intermédiaire plus riche en craie assez profond.
              <br />
              Sous-sol, craie soyeuse fortement fracturé.
            </p>
            <div>
              <p
                className="resizesr"
                style={{
                  color: "#091176",
                  textAlign: "center"
                }}
              >
                Équilibré, Réfléchi & Soyeux
              </p>
            </div>
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
                  width: "85px",
                  height: "120px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
          </div>
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
              className="titresr"
              style={{
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
              <strong>Cépage :</strong> chardonnay.
              <br />
              <strong>Parcelle :</strong> Les Hautes Mottes
              <br />
              Le Mesnil sur Oger — Grand Cru.
              <br />
              Exposition sud, pente douce 2%
              <br />
              Sol superficiel très fin bien structuré, ouvert
              <br />
              et grumeleux avec un enherbement à base de trèfle. <br />
              Horizon de transition presque inexistant.
              <br />
              Sous-sol, craie très pure et compact.
            </p>
            <div>
              <p
                className="resizesr"
                style={{
                  color: "#091176",
                  textAlign: "center"
                }}
              >
                Exigeant, Délicat & Complexe
              </p>
            </div>
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
                  width: "85px",
                  height: "120px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
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
              className="titresr"
              style={{
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
              <strong>Cépage :</strong> Chardonnay Muscaté
              <br />
              <strong>Parcelle :</strong> Le Chemin de Flavigny
              <br />
              Oger — Grand Cru.
              <br />
              Plein sud, pente moyenne 6 %.
              <br />
              Sol superficiel très léger avec enherbement naturel.
              <br />
              Horizon intermédiaire peu riche en craie. <br />
              Sous-sol, craie compact légèrement fracturé.
            </p>
            <div>
              <p
                className="resizesr"
                style={{
                  color: "#091176",
                  textAlign: "center"
                }}
              >
                Rêveur, Joyeux & Expressif
              </p>
            </div>
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
                  width: "85px",
                  height: "120px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default bouteille;
