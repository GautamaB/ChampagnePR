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
        <Navbar
          style={{ backgroundColor: "#000000" }}
          light
          fixed={`top`}
          expand="md"
        >
          <NavbarBrand href="/" style={{ color: "white" }}>
            <img
              src="image/regnault-logo facture.jpg"
              alt=""
              style={{
                width: "32%",
                marginLeft: "25px",
                borderTopWidth: "3px",
                borderStyle: "solid"
              }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#Une viticulture durable et respectueuse de l'environnement"
                  style={{ fontSize: "12px", color: "#D5B23C" }}
                >
                  Une viticulture durable et respectueuse de l'environnement{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Les Bouteilles de Patrick Regnault"
                  style={{ fontSize: "12px", color: "#D5B23C" }}
                >
                  Les Bouteilles de Patrick Regnault
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Les Bouteilles de Stéphane Regnault"
                  style={{ fontSize: "12px", color: "#D5B23C" }}
                >
                  Les Bouteilles de Stéphane Regnault
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Galerie Photos"
                  style={{ fontSize: "12px", color: "#D5B23C" }}
                >
                  Galerie Photos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Contact"
                  style={{ fontSize: "12px", color: "#D5B23C" }}
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
