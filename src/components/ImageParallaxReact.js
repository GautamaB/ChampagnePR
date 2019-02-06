import React from "react";
import { Parallax } from "react-parallax";
import { Container, Row, Col } from "reactstrap";

const image1 = "image/9.jpg";
const image2 = "image/14.jpg";
const image3 = "image/4.jpg";
const image4 = "image/26.jpg";

const ImageParallaxReact = () => (
  <div>
    <Row>
      <Col md={{ size: 4 }}>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 1000 }} />
        </Parallax>
      </Col>
      <Col md={{ size: 4 }}>
        <div
          style={{
            borderStyle: "solid",
            borderColor: "#fff6db",
            borderWidth: "15px",
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
            méthodes de travail. Le respect du sol est la base d'une viticulture
            saine. Pour avoir de bon raisin, la vigne doit se sentir bien dans
            son milieu. Notre vignoble est désherbé mécaniquement pour limiter
            plus que fortement l'utilisation de désherbant chimique.
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
          <hr style={{ background: "black" }} />
          <br />
        </div>
      </Col>
      <Col md={{ size: 4 }}>
        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 1000 }} />
        </Parallax>
      </Col>

      <Col md={{ size: 4 }}>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col md={{ size: 4 }}>
        <div
          style={{
            backgroundColor: "#fff6db",
            borderBottom: "none"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "75px",
              fontsize: "28px",
              marginBottom: "185px",
              color: "#000000"
            }}
          >
            Pourquoi notre exploitation n'est pas certifier Agriculture
            Biologique? Pour moi l'agriculture biologique n'est pas un objectif
            en soit. Mon leitmotif, utiliser le moins de produit possible. En
            Champagne, nous pouvons avoir des saisons viticoles très humide, ce
            qui favorise le dévellopement des maladies. Lors de ces années
            "difficile", la protection biologique reste assez délicate car la
            vigne doit être protéger jusqu'à plusieurs fois par semaine, je
            préfère alors utiliser 1 ou 2 produits non biologique pour diminuer
            la quantité de produit utiliser et repartir ensuite en protection
            biologique. C'est ce qu'on appel une lutte raisonnée!
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
          <hr style={{ background: "black" }} />
        </div>
      </Col>
      <Col md={{ size: 4 }}>
        <Parallax bgImage={image4} strength={500}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col md={{ size: 4 }}>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col md={{ size: 4 }}>
        <div
          style={{
            backgroundColor: "#fff6db",
            borderBottom: "none"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "75px",
              fontsize: "28px",
              marginBottom: "185px",
              color: "#000000"
            }}
          >
            Pour aller un peu plus loin, nous utilisons aussi des plantes pour
            soignés la vigne. Tisane d'Ortie, décoction de prêle, extrait de
            Valériane, toutes ces plantes vont apporter à la vigne un petit
            plus. Dans la lutte biologique contre les maladie de la vigne, nous
            utilisons du cuivre sous différentes formes. Ce cuivre peut être
            phytotoxique pour les sols, c'est pourquoi nous devons tout mettre
            en oeuvre pour en diminuer sont utilisation. Ces plantes vont nous
            permettre de diminuer ces doses de cuivre. Ensuite, c'est la
            connaissance de chaques vignerons ainsi qu'une certaine prise de
            risque qui vont permettre à la viticulture d'aller de l'avant.
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
          <hr style={{ background: "black" }} />
        </div>
      </Col>
      <Col md={{ size: 4 }}>
        <Parallax bgImage={image4} strength={500}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col md={{ size: 4 }}>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 640 }} />
        </Parallax>
      </Col>
      <Col md={{ size: 4 }}>
        <div
          style={{
            backgroundColor: "#fff6db",
            borderBottom: "none"
          }}
        >
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
            méthodes de travail. Le respect du sol est la base d'une viticulture
            saine. Pour avoir de bon raisin, la vigne doit se sentir bien dans
            son milieu. Notre vignoble est désherbé mécaniquement pour limiter
            plus que fortement l'utilisation de désherbant chimique.
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
          <hr style={{ background: "black" }} />
        </div>
      </Col>
      <Col md={{ size: 4 }}>
        <Parallax bgImage={image4} strength={500}>
          <div style={{ height: 640 }} />
        </Parallax>
      </Col>
    </Row>
  </div>
);

export default ImageParallaxReact;
