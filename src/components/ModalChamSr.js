import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Row>
        <div style={{ marginBottom: "55px" }}>
          <h2
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "-18px"
            }}
          >
            Brut et extra brut blanc de blancs
          </h2>

          <Button
            style={{ fontSize: "10px" }}
            color="danger"
            onClick={this.toggle}
          >
            Plus d'informations
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              Brut et extra brut
              <br /> Blanc de blancs
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <img src="/image/brut.png" alt="brut" />
                </Col>
                <Col>
                  Un ensemblage complexe
                  <br />
                  <strong>9g</strong> le dosage traditionnel, plansant et frais
                  <br />
                  <strong>7g</strong> un juste milieu pour les amateurs
                  cherchant de nouvelles sansations
                  <br />
                  <strong>5g</strong> de vin presque nature, un chardonnay vrai
                  sans pudeur
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Row>
    );
  }
}

export default ModalExample;
