import React from "react";
import ModalChamPr from "./ModalChamPr";

const bouteille = () => {
  return (
    <div>
      <div
        style={{ paddingBottom: "35px" }}
        id="Les Bouteilles de Patrick Regnault"
      />
      <h1
        style={{
          size: "20px",
          textAlign: "center",
          color: "#D5B23C",
          marginTop: "25px"
        }}
      >
        Les Bouteilles de Patrick Regnault
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
      <ModalChamPr />
    </div>
  );
};

export default bouteille;
