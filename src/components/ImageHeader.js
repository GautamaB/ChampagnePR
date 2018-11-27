import React from "react";
import { Row } from "reactstrap";
const imageHeader = () => {
  return (
    <Row>
      <img
        className="wallpaper"
        src="/image/vigne.png"
        alt="japan flag"
        style={{
          width: "100%",
          height: "900px",
          backgroundSize: "cover"
        }}
      />
    </Row>
  );
};

export default imageHeader;
