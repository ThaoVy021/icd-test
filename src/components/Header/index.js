import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import LogoICD from "../../assets/SVG/logo-icd.svg";
import Mail from "../../assets/SVG/mail.svg";
import "./index.scss";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary header-container">
      <Container className="header">
        <NavLink to="/" className="navbar-brand header-logo">
          <img src={LogoICD} alt="LogoICD" className="header-logo-icd" />
        </NavLink>

        <Navbar.Collapse id="basic-navbar-nav" className="header-contact">
          <Nav className="me-auto">
            <NavLink to="/contact" className="nav-link header-contact-mail">
              <img
                src={Mail}
                alt="ContactICD"
                className="header-contact-mail-icon"
              />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
