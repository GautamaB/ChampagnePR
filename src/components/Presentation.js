import React from "react";

import { Row, Col } from "reactstrap";

const Presentation = () => {
  return (
    <div>
      <Row>
        <Col>
          <div style={{ marginBottom: "6%" }} id="Nos vins" />
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
              fontSize: "25px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "1%",
              marginBottom: "1%"
            }}
          >
            Présentation
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
          xs={{ size: 8 }}
          md={{ size: 8 }}
          style={{
            color: "black"
          }}
        >
          <p
            className="resizepr"
            style={{
              textAlign: "justify",
              marginTop: "10%",
              color: "#000000",
              paddingLeft: "12%"
            }}
          >
            L'idée de la vinification sur ces cuvées est la mise en avant du
            terroir.
            <br />
            Toute les fermentations sont effectuées avec les ferments indigène
            présents naturellement sur la peau des raisins.
            <br />
            La majorité des jus sont vinifié en cuve inox pour ne pas altérer la
            pureté de l'expression du terroir. Différents types de fût sont
            aussi utilisés pour apporter une complexité qui ai très utile
            ensuite lors de l'assemblage des vins avant la mise en bouteille.
            <br />
            Je pratique une vinification que j'appelle non interventionniste,
            c'est a dire que je laisse le jus puis le vins aller dans sa propre
            direction, mon travail consiste seulement à m'assurer que tout se
            passe dans les meilleurs conditions!
            <br />
            Je ne recherche pas a faire des millésimes mais au contraire je veux
            conserver ce qui a participé au succès du Champagne, les assemblages
            d'année. <br />
            J'ai créé une soléra par parcelles qui me permet de complexifier la
            typicité du terroir en mélanger toutes les caractéristique de chaque
            année.
          </p>
        </Col>
        <Col xs={{ size: 4 }} md={{ size: 4 }}>
          <div>
            <img
              src="image/18.jpg"
              alt="cuverie"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute"
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Presentation;
