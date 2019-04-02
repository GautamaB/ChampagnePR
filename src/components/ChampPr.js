import React from "react";

import { Row, Col } from "reactstrap";

const ChampPr = ({
  titre,
  text,
  imageRight,
  nameRight,
  style,
  imageLeft,
  nameLeft
}) => {
  return (
    <div>
      <Row>
        <Col>
          <div style={{ paddingTop: "45px" }} id="Nos vins" />
          <h1
            style={{
              size: "20px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "25px",
              marginBottom: "25px"
            }}
          >
            Nos Vins
          </h1>
          <h2
            style={{
              size: "20px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "25px",
              marginBottom: "45px"
            }}
          >
            Les Bouteilles de Patrick Regnault
          </h2>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "#fff6db" }}>
          <Row
            style={{
              height: "425px",
              padingTop: "15px"
            }}
          >
            <Col
              xs={{ size: 6, offset: 0 }}
              md={{ size: 4, offset: 1 }}
              style={{
                color: "black",
                fontSize: "24px"
              }}
            >
              <div style={{ marginTop: "25px" }}>
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#d2d441",
                    marginTop: "15px",
                    marginBottom: "25px",
                    textAlign: "center",
                    transform: "rotate(-5deg)"
                  }}
                  id="titreChamp"
                >
                  Brut et Extra-Brut <br />
                  Blanc de Blancs
                </h2>
                <p
                  style={{
                    fontSize: "12px",
                    textAlign: "center"
                  }}
                >
                  Un ensemblage complexe <br /> <br />
                  <strong>9g</strong> le dosage traditionnel,
                  <br /> plansant et frais
                  <br />
                  <strong>7g</strong> un juste milieu pour les amateurs
                  <br /> cherchant de nouvelles sensations
                  <br />
                  <strong>5g</strong> de vin presque nature, un chardonnay
                  <br /> vrai sans pudeur
                </p>
                <div>
                  <img
                    src="/image/brut.png"
                    alt="brut"
                    style={{
                      width: "150px",
                      height: "100px",
                      marginBottom: "5px",
                      marginLeft: "75px"
                    }}
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      float: "right",
                      color: "#d2d441",
                      marginTop: "15px",
                      marginRight: "85px",
                      transform: "rotate(-10deg)"
                    }}
                  >
                    Vivacité & <br />
                    Minéralité
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ size: 6 }} md={{ size: 6 }}>
              <img
                src="/image/18.jpg"
                alt="champagne"
                style={{
                  width: "715px",
                  height: "400px",
                  marginTop: "15px"
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "#fff6db" }}>
          <Row
            style={{
              height: "350px",
              padingTop: "15px"
            }}
          >
            <Col
              xs={{ size: 6, offset: 0 }}
              md={{ size: 4, offset: 1 }}
              style={{
                color: "black",
                fontSize: "24px"
              }}
            >
              <div style={{ marginTop: "25px" }}>
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#d65829",
                    marginTop: "15px",
                    marginBottom: "25px",
                    textAlign: "center",
                    transform: "rotate(-5deg)"
                  }}
                  id="titreChamp"
                >
                  Brut Millésimé
                </h2>
                <p
                  style={{
                    fontSize: "12px",
                    textAlign: "center"
                  }}
                >
                  Issu d'une année spécifique. <br />
                  Un champagne plus structuré
                  <br />
                  avec des notes évolués.
                  <br />
                  <br />
                  Un champagne Racé.
                  <br /> Un équilibre entre
                  <br />
                </p>
                <div>
                  <img
                    src="/image/BrutMillésimé.png"
                    alt="Brut Millésimé"
                    style={{
                      width: "150px",
                      height: "100px",
                      marginBottom: "5px",
                      marginLeft: "75px"
                    }}
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      float: "right",
                      color: "#d65829",
                      marginTop: "15px",
                      marginRight: "85px",
                      transform: "rotate(-10deg)"
                    }}
                  >
                    Fraîcheur & <br />
                    Richesse
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ size: 6 }} md={{ size: 6 }}>
              <img
                src="/image/15.jpg"
                alt="champagne"
                style={{
                  width: "715px",
                  height: "325px",
                  marginTop: "15px"
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ChampPr;
