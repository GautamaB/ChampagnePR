import React from "react";
import { Parallax } from "react-parallax";

import { Row, Col } from "reactstrap";

const ChampPr = () => {
  return (
    <div>
      <Row>
        <Col>
          <div style={{ paddingBottom: "4%" }} id="Nos vins" />
          <h1
            style={{
              fontSize: "50px",
              textAlign: "center",
              color: "#D5B23C"
            }}
          >
            Nos Vins
          </h1>
          <h2
            style={{
              size: "20px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "1%",
              marginBottom: "1%"
            }}
          >
            Les Bouteilles de Patrick Regnault
          </h2>
        </Col>
      </Row>
      <Row
        style={{
          height: "400px",
          backgroundColor: "#fff6db"
        }}
      >
        <Col
          xs={{ size: 6 }}
          md={{ size: 4 }}
          style={{
            color: "black"
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "28px",
                color: "#d2d441",
                marginTop: "2%",
                marginBottom: "3%",
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
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "230px",
                marginBottom: "25px"
              }}
            >
              <img
                src="/image/brut.png"
                alt="brut"
                style={{
                  width: "140px",
                  height: "90px",
                  float: "left"
                }}
              />
              <p
                style={{
                  fontSize: "18px",
                  color: "#d2d441",
                  transform: "rotate(-10deg)",
                  marginLeft: "145px"
                }}
              >
                Vivacité & <br />
                Minéralité
              </p>
            </div>
          </div>
        </Col>
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/18.jpg"}
            bgImageAlt="champagne brut et extra brut"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
      </Row>
      <Row
        style={{
          height: "400px",
          backgroundColor: "#fff6db"
        }}
      >
        <Col
          xs={{ size: 6, offset: 0 }}
          md={{ size: 4 }}
          style={{
            color: "black"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#d65829",
                marginTop: "2%",
                marginBottom: "3%",
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
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "245px",
                marginBottom: "25px"
              }}
            >
              <img
                src="/image/BrutMillésimé.png"
                alt="Brut Millésimé"
                style={{
                  width: "140px",
                  height: "90px",
                  float: "left"
                }}
              />
              <p
                style={{
                  fontSize: "17px",
                  color: "#d2d441",
                  transform: "rotate(-10deg)",
                  marginLeft: "150px"
                }}
              >
                Fraîcheur & <br />
                Richesse
              </p>
            </div>
          </div>
        </Col>
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/15.jpg"}
            bgImageAlt="champagne Brut Millésimé"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
      </Row>
      <Row
        style={{
          height: "400px",
          backgroundColor: "#fff6db"
        }}
      >
        <Col
          xs={{ size: 6, offset: 0 }}
          md={{ size: 4 }}
          style={{
            color: "black"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#000000",
                marginTop: "2%",
                marginBottom: "3%",
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
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "370px",
                marginBottom: "25px"
              }}
            >
              <img
                src="/image/réserve.png"
                alt="Brut Réserve"
                style={{
                  width: "100px",
                  height: "120px",
                  marginBottom: "5px",
                  marginLeft: "100px"
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
                Finesse & <br />
                Structure
              </p>
            </div>
          </div>
        </Col>
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/20.jpg"}
            bgImageAlt="champagne  Brut Réserve"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
      </Row>
      <Row
        style={{
          height: "400px",
          backgroundColor: "#fff6db"
        }}
      >
        <Col
          xs={{ size: 6, offset: 0 }}
          md={{ size: 4 }}
          style={{
            color: "black"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#584764",
                marginTop: "2%",
                marginBottom: "3%",
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
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "380px",
                marginBottom: "25px"
              }}
            >
              <img
                src="/image/esprit.png"
                alt="Esprit d'Auteur"
                style={{
                  width: "100px",
                  height: "120px",
                  marginBottom: "5px",
                  marginLeft: "84px"
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
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/Esprit.jpg"}
            bgImageAlt="champagne Esprit d'Auteur"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
      </Row>
      <Row
        style={{
          height: "400px",
          backgroundColor: "#fff6db"
        }}
      >
        <Col
          xs={{ size: 6, offset: 0 }}
          md={{ size: 4 }}
          style={{
            color: "black"
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h2
              style={{
                fontSize: "28px",
                color: "#b83940",
                marginTop: "2%",
                marginBottom: "3%",
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
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "410px",
                marginBottom: "25px"
              }}
            >
              <img
                src="/image/rosé.png"
                alt="Brut rosé"
                style={{
                  width: "140px",
                  height: "100px",
                  marginBottom: "5px",
                  marginLeft: "70px"
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
        <Col xs={{ size: 6 }} md={{ size: 8 }}>
          <Parallax
            bgImage={"image/16.jpg"}
            bgImageAlt="champagne Brut Rosé"
            strength={200}
          >
            <div style={{ height: 400 }} />
          </Parallax>
        </Col>
      </Row>
    </div>
  );
};

export default ChampPr;
