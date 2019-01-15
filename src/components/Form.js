import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export default class FormContact extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Form style={{ marginBottom: "55px" }}>
            <FormGroup>
              <Label style={{ marginLeft: "25px" }} for="exampleEmail">
                Nom :
              </Label>
              <Col xs="12" md="9">
                <Input style={{ marginLeft: "35px" }} type="text" name="nom" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label style={{ marginLeft: "25px" }} for="exampleEmail">
                Email :
              </Label>
              <Col xs="12" md="9">
                <Input
                  style={{ marginLeft: "35px" }}
                  type="email"
                  name="email"
                  id="exampleEmail"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label style={{ marginLeft: "25px" }} for="exampleText">
                Message :
              </Label>
              <Col xs="12" md="9">
                <Input
                  style={{
                    marginLeft: "35px",
                    height: "200px"
                  }}
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </Col>
            </FormGroup>
            <Col xs={{ size: 5, offset: 2 }} md={{ size: 5, offset: 3 }}>
              <Button color="success">Envoyer le formulaire</Button>
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}
