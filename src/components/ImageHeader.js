import React from "react";
import { Row, Col } from "reactstrap";

const imageHeader = () => {
  return (
    <Row>
      <Col xs="12" md="12">
        <img
          alt=""
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            height: "110vh",
            backgroundImage: "url(/image/cover.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            display: "block"
          }}
        />
      </Col>
    </Row>
  );
};

export default imageHeader;
