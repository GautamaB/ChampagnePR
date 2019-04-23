import React from "react";
import { Parallax } from "react-parallax";
import { Row, Col } from "reactstrap";
import "../App.css";

const image1 = "image/9.jpg";
const image2 = "image/14.jpg";
const image3 = "image/4.jpg";
const image4 = "image/3.jpg";
const image5 = "image/6.jpg";
const image6 = "image/7.jpg";
const image7 = "image/8.jpg";
const image8 = "image/11.jpg";

const ImageParallaxReact = () => (
  <div>
    <Row>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingRight: "0px" }}>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col
        xs={{ size: 12 }}
        md={{ size: 4 }}
        style={{
          marginTop: "-13%",
          backgroundColor: "#fff6db",
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: "black",
          borderBottom: "none"
        }}
      >
        <img
          src="image/logo facture.png"
          alt=""
          style={{
            marginTop: "10%",
            height: "12%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%"
          }}
        />
        <div
          id="L'esprit de la maison"
          style={{ paddingTop: "5%", marginTop: "5%" }}
        />
        <h1
          style={{
            textAlign: "center",
            marginTop: "12%",
            marginBottom: "27%",
            color: "#D5B23C"
          }}
        >
          L'esprit de la maison
        </h1>
        <p
          style={{
            textAlign: "justify",
            marginTop: "15%",
            marginBottom: "11%",
            color: "#000000",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          La protection de l'environnement est au coeur de toutes les
          discutions. Si nous ne changeons pas notre approche à l'environnement,
          qu'allons nous léguer à nos futurs générations? Depuis 2005, nous
          avons choisi de modifier en profondeur nos méthodes de travail. Le
          respect du sol est la base d'une viticulture saine. Pour avoir de bon
          raisin, la vigne doit se sentir bien dans son milieu. Notre vignoble
          est désherbé mécaniquement pour limiter plus que fortement
          l'utilisation de désherbant chimique.
        </p>
        <img
          src="image/lion.png"
          alt="logo"
          style={{
            opacity: "0.3",
            width: "100px",
            height: "100px",
            marginLeft: "83%",
            transform: "rotate(-30deg)"
          }}
        />
        <hr style={{ background: "black" }} />
      </Col>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingLeft: "0px" }}>
        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingRight: "0px" }}>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col
        md={{ size: 4 }}
        style={{
          backgroundColor: "#fff6db",
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: "black",
          borderTop: "none",
          borderBottom: "none"
        }}
      >
        {" "}
        <p
          style={{
            textAlign: "justify",
            marginTop: "30%",
            marginBottom: "21%",
            color: "#000000",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          Pourquoi notre exploitation n'est pas certifier Agriculture
          Biologique? Pour moi l'agriculture biologique n'est pas un objectif en
          soit. Mon leitmotif, utiliser le moins de produit possible. En
          Champagne, nous pouvons avoir des saisons viticoles très humide, ce
          qui favorise le dévellopement des maladies. Lors de ces années
          "difficile", la protection biologique reste assez délicate car la
          vigne doit être protéger jusqu'à plusieurs fois par semaine, je
          préfère alors utiliser 1 ou 2 produits non biologique pour diminuer la
          quantité de produit utiliser et repartir ensuite en protection
          biologique. C'est ce qu'on appel une lutte raisonnée!
        </p>
        <img
          src="image/lion.png"
          alt="logo"
          style={{
            opacity: "0.3",
            width: "100px",
            height: "100px",
            marginLeft: "83%",
            transform: "rotate(-30deg)"
          }}
        />
        <hr style={{ background: "black" }} />
      </Col>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingLeft: "0px" }}>
        <Parallax bgImage={image4} strength={200}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingRight: "0px" }}>
        <Parallax bgImage={image5} strength={200}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col
        xs={{ size: 12 }}
        md={{ size: 4 }}
        style={{
          backgroundColor: "#fff6db",
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: "black",
          borderTop: "none",
          borderBottom: "none"
        }}
      >
        <p
          style={{
            textAlign: "justify",
            marginTop: "30%",
            marginBottom: "21%",
            color: "#000000",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          Pour aller un peu plus loin, nous utilisons aussi des plantes pour
          soignés la vigne. Tisane d'Ortie, décoction de prêle, extrait de
          Valériane, toutes ces plantes vont apporter à la vigne un petit plus.
          Dans la lutte biologique contre les maladie de la vigne, nous
          utilisons du cuivre sous différentes formes. Ce cuivre peut être
          phytotoxique pour les sols, c'est pourquoi nous devons tout mettre en
          oeuvre pour en diminuer sont utilisation. Ces plantes vont nous
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
            marginLeft: "83%",
            transform: "rotate(-30deg)"
          }}
        />
        <hr style={{ background: "black" }} />
      </Col>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingLeft: "0px" }}>
        <Parallax bgImage={image6} strength={200}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingRight: "0px" }}>
        <Parallax bgImage={image7} strength={200}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
      <Col
        xs={{ size: 12 }}
        md={{ size: 4 }}
        style={{
          backgroundColor: "#fff6db",
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: "black",
          borderTop: "none"
        }}
      >
        <div style={{ paddingBottom: "12%" }} id="Le terroir" />
        <h2
          style={{
            fontSize: "24px",
            color: "#D5B23C",
            textAlign: "center",
            marginBottom: "35px"
          }}
        >
          Nos parcelles
        </h2>
        <img
          src="image/carte.png"
          alt="carte des parcelles"
          style={{ width: "100%", height: "350px", marginBottom: "35px" }}
        />
        <img
          src="image/lion.png"
          alt="logo"
          style={{
            opacity: "0.3",
            width: "100px",
            height: "100px",
            marginTop: "12%",
            marginLeft: "83%",
            transform: "rotate(-30deg)"
          }}
        />
      </Col>
      <Col xs={{ size: 12 }} md={{ size: 4 }} style={{ paddingLeft: "0px" }}>
        <Parallax bgImage={image8} strength={200}>
          <div style={{ height: 700 }} />
        </Parallax>
      </Col>
    </Row>
  </div>
);
export default ImageParallaxReact;
