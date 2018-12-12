import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  

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
      <div>
        <Navbar color="light" light  fixed={`top`}   expand="md" style = {{
            textDecoration : "none",
            border :"none"
        }}>
          <NavbarBrand href="/">Champagne Regnault</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#un peu d'histoire"     textDecoration="none"
>Un peu d'histoire</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#le vin">le vin</NavLink>
              </NavItem>
                         <NavItem>
                <NavLink href="#le champagne">le champagne</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
