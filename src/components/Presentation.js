import React from "react";

import { Row, Col } from "reactstrap";

const Presentation = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2
            style={{
              fontSize: "25px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "3%"
            }}
          >
            Les Bouteilles de Stéphane Regnault
          </h2>
          <h2
            style={{
              fontSize: "25px",
              textAlign: "center",
              color: "#D5B23C",
              marginTop: "2%",
              marginBottom: "3%"
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
          xs={{ size: 6 }}
          md={{ size: 7 }}
          style={{
            color: "black"
          }}
        >
          <p
            className="resizepr"
            style={{
              textAlign: "justify",
              color: "#000000",
              margin: "10% 8% 0"
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
        <Col xs={{ size: 5 }} md={{ size: 5 }} style={{ paddingLeft: "0%" }}>
          <img
            src="image/18.jpg"
            alt="cuverie"
            style={{
              width: "115%",
              height: "100%",
              position: "absolute"
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Presentation;
