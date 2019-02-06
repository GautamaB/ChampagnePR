import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Row>
        <Navbar color="white" light fixed={`top`} expand="md">
          <NavbarBrand href="/" style={{ color: "#D5B23C" }}>
            Champagne Regnault
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#Une viticulture durable et respectueuse de l'environnement"
                  style={{ fontSize: "12px", color: "#97d60c" }}
                >
                  Une viticulture durable et respectueuse de l'environnement{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Les Bouteilles de Patrick Regnault"
                  style={{ fontSize: "12px", color: "#97d60c" }}
                >
                  Les Bouteilles de Patrick Regnault
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Les Bouteilles de Stéphane Regnault"
                  style={{ fontSize: "12px", color: "#97d60c" }}
                >
                  Les Bouteilles de Stéphane Regnault
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Galerie Photos"
                  style={{ fontSize: "12px", color: "#97d60c" }}
                >
                  Galerie Photos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Contact"
                  style={{ fontSize: "12px", color: "#97d60c" }}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Row>
    );
  }
}
