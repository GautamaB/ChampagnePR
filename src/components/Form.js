import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class FormContact extends React.Component {
  render() {
    return (
      <Form style={{ marginBottom: "55px" }}>
        <FormGroup>
          <Label style={{ marginLeft: "25px" }} for="exampleEmail">
            Nom :
          </Label>
          <Input
            style={{ marginLeft: "35px", width: "400px" }}
            type="text"
            name="nom"
          />
        </FormGroup>
        <FormGroup>
          <Label style={{ marginLeft: "25px" }} for="exampleEmail">
            Email :
          </Label>
          <Input
            style={{ marginLeft: "35px", width: "400px" }}
            type="email"
            name="email"
            id="exampleEmail"
          />
        </FormGroup>
        <FormGroup>
          <Label style={{ marginLeft: "25px" }} for="exampleText">
            Message :
          </Label>
          <Input
            style={{ marginLeft: "35px", width: "400px", height: "100px" }}
            type="textarea"
            name="text"
            id="exampleText"
          />
        </FormGroup>
        <Button style={{ marginLeft: "145px" }}>Envoyer le formulaire</Button>
      </Form>
    );
  }
}
