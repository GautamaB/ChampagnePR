import React from "react";
import ModalChamSr from "./ModalChamSr";

const bouteille = () => {
  return (
    <div>
      <h1
        style={{
          size: "20px",
          textAlign: "center",
          color: "#D5B23C",
          marginTop: "25px"
        }}
      >
        Les Bouteilles de Stéphane Regnault
      </h1>
      <img
        src="/image/bouteille.jpg"
        alt="bouteille de Patrick Regnault"
        style={{
          width: "50%",
          marginTop: "55px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block"
        }}
      />
      <ModalChamSr />
    </div>
  );
};

export default bouteille;
