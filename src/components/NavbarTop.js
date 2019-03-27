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
              src="image/logo.png"
              alt=""
              style={{
                width: "15%",
                marginLeft: "5px"
              }}
            />
          </NavbarBrand>
          <NavbarToggler
            style={{ backgroundColor: "#fff" }}
            onClick={this.toggle}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#L'esprit de la maison"
                  style={{ fontSize: "24px", color: "#D5B23C" }}
                >
                  L'esprit de la maison
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Le terroir"
                  style={{ fontSize: "24px", color: "#D5B23C" }}
                >
                  Le terroir
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Nos vins"
                  style={{ fontSize: "24px", color: "#D5B23C" }}
                >
                  Nos vins
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Galerie Photos"
                  style={{ fontSize: "24px", color: "#D5B23C" }}
                >
                  Galerie Photos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Contact"
                  style={{ fontSize: "24px", color: "#D5B23C" }}
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
