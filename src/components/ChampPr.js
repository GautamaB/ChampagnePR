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
          <div id="Nos vins" />
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
              height: "425px"
            }}
          >
            <Col
              xs={{ size: 6, offset: 0 }}
              md={{ size: 4 }}
              style={{
                color: "black",
                marginLeft: "50px"
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#d2d441",
                    marginTop: "25px",
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
                  width: "735px",
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
              height: "425px"
            }}
          >
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
                  width: "735px",
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
              height: "425px"
            }}
          >
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
                    color: "#000000",
                    marginTop: "15px",
                    marginBottom: "25px",
                    textAlign: "center",
                    transform: "rotate(-5deg)"
                  }}
                  id="titreChamp"
                >
                  Brut Réserve
                </h2>
                <p
                  style={{
                    fontSize: "12px",
                    textAlign: "center"
                  }}
                >
                  Des vieilles vignes de chardonnay <br />
                  Une pointe de Pinot Noir
                  <br />
                  <br />
                  Les connaisseurs sauront
                  <br />
                  apprécier ses notes torréfiées
                  <br />
                  qui évolueront vers le miel
                  <br />
                  et les fruits compotés
                </p>
                <div>
                  <img
                    src="/image/réserve.png"
                    alt="Brut Réserve"
                    style={{
                      width: "100px",
                      height: "120px",
                      marginBottom: "5px",
                      marginLeft: "125px"
                    }}
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      float: "right",
                      color: "#000000",
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
                src="/image/20.jpg"
                alt="champagne"
                style={{
                  width: "735px",
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
              height: "425px"
            }}
          >
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
                    color: "#584764",
                    marginTop: "15px",
                    marginBottom: "25px",
                    textAlign: "center",
                    transform: "rotate(-5deg)"
                  }}
                  id="titreChamp"
                >
                  Esprit d'Auteur
                </h2>
                <p
                  style={{
                    fontSize: "12px",
                    textAlign: "center"
                  }}
                >
                  L'elegace du Mesnil lié à la finesse
                  <br />
                  fruitée d'une fût.
                  <br />
                  Un assemblage d'élicat qui saura vous
                  <br />
                  faire réfléchir.
                  <br />
                  <br />
                  Un subtil mélange entre l'ancien
                  <br />
                  et le nouveau
                </p>
                <div>
                  <img
                    src="/image/esprit.png"
                    alt="Esprit d'Auteur"
                    style={{
                      width: "100px",
                      height: "120px",
                      marginBottom: "5px",
                      marginLeft: "115px"
                    }}
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      float: "right",
                      color: "#584764",
                      marginTop: "15px",
                      marginRight: "85px",
                      transform: "rotate(-10deg)"
                    }}
                  >
                    Complexité & <br />
                    Savoir-faire
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ size: 6 }} md={{ size: 6 }}>
              <img
                src="/image/19.jpg"
                alt="champagne"
                style={{
                  width: "735px",
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
              height: "425px"
            }}
          >
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
                    color: "#b83940",
                    marginTop: "15px",
                    marginBottom: "25px",
                    textAlign: "center",
                    transform: "rotate(-5deg)"
                  }}
                  id="titreChamp"
                >
                  Brut Rosé
                </h2>
                <p
                  style={{
                    fontSize: "12px",
                    textAlign: "center"
                  }}
                >
                  Notre leitmotiv sauvegarder
                  <br />
                  la typicitè de notre terroir
                  <br />
                  <br />
                  Un rosé frais, aerien
                  <br />
                  avec des notes fruitées
                  <br />
                  <br />
                  Idéal pour un apéritif
                  <br />
                  en terrasse au soleil
                </p>
                <div>
                  <img
                    src="/image/rosé.png"
                    alt="Brut rosé"
                    style={{
                      width: "120px",
                      height: "100px",
                      marginBottom: "5px",
                      marginLeft: "85px"
                    }}
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      float: "right",
                      color: "#b83940",
                      marginTop: "15px",
                      marginRight: "85px",
                      transform: "rotate(-10deg)"
                    }}
                  >
                    Délicatesse & <br />
                    Elégance
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ size: 6 }} md={{ size: 6 }}>
              <img
                src="/image/16.jpg"
                alt="champagne"
                style={{
                  width: "735px",
                  height: "400px",
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
