import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = (props) => {

  const linkStyle = {
    color : "grey"
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Paul Valenzuela</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/ProgrammingTitan">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">LinkedIn</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu  right>
                <DropdownItem >
                    <NavLink  style={linkStyle} href="/Projects/PongGame">Pong Game</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink style={linkStyle} href="/Projects/Car">Obstacle Avoiding Car</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink  style={linkStyle}href="/Projects/RelayRaceGame">Relay Race Game</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink style={linkStyle} href="/Projects/CarDCMotor">DC Motor Car</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink style={linkStyle}href="https://raztecagoods.herokuapp.com/">E-Commerce Website</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink style={linkStyle}href="https://www.slideshare.net/PaulValenzuela17/chip-specification">System on a Chip</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;