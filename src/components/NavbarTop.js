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
        <Navbar color="light" light fixed={`top`} expand="md">
          <NavbarBrand href="/" style={{ color: "#D5B23C" }}>
            Champagne Regnault
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#Un peu d'histoire"
                  textDecoration="none"
                  style={{ color: "#97d60c" }}
                >
                  Un peu d'histoire
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Le Vin" style={{ color: "#97d60c" }}>
                  Le Vin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Le Champagne" style={{ color: "#97d60c" }}>
                  Le Champagne
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Row>
    );
  }
}
