import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export default class FormContact extends React.Component {
  render() {
    return (
      <Row>
        <Col style={{ marginTop: "10%" }}>
          <p style={{ marginLeft: "1%" }}>Pour prendre contact directement :</p>
          <Form style={{ marginLeft: "3%" }}>
            <FormGroup>
              <Label style={{ marginLeft: "3%" }} for="exampleEmail">
                Nom :
              </Label>
              <Col xs="12" md="9">
                <Input
                  style={{ marginLeft: "4%" }}
                  type="text"
                  name="nom"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label style={{ marginLeft: "3%" }} for="exampleEmail">
                Email :
              </Label>
              <Col xs="12" md="9">
                <Input
                  style={{ marginLeft: "4%" }}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label style={{ marginLeft: "2%" }} for="exampleText">
                Message :
              </Label>
              <Col xs="12" md="9">
                <Input
                  style={{
                    marginLeft: "3%",
                    height: "200px",
                    boxShadow: "none"
                  }}
                  type="textarea"
                  name="text"
                  id="exampleText"
                  required
                />
              </Col>
            </FormGroup>
            <Col xs={{ size: 5, offset: 2 }} md={{ size: 5, offset: 2 }}>
              <Button color="success" style={{ marginBottom: "10%" }}>
                Envoyer le formulaire
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}
