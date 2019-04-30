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
                width: "23%",
                marginLeft: "5%"
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
                  className="link"
                  href="#L'esprit de la maison"
                  style={{ color: "#D5B23C" }}
                >
                  L'esprit de la maison
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="link"
                  href="#Le terroir"
                  style={{ color: "#D5B23C" }}
                >
                  Le terroir
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="link"
                  href="#Nos vins"
                  style={{ color: "#D5B23C" }}
                >
                  Nos vins
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="link"
                  href="#Galerie Photos"
                  style={{ color: "#D5B23C" }}
                >
                  Galerie Photos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="link"
                  href="#Contact"
                  style={{ color: "#D5B23C" }}
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
