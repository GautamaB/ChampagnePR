import React from "react";
import { Row } from "reactstrap";
const imageHeader = () => {
  return (
    <Row>
      <img
        alt=""
        style={{
          width: "100%",
          height: "140vh",
          backgroundImage: "url(/image/vigne.png)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      />
    </Row>
  );
};

export default imageHeader;
