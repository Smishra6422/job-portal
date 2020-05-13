import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

import "./header.style.scss";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar className="header" color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <strong className="logo-text">
              <a href="/" className="logo">
                LineUpX
              </a>
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <MDBNavItem>
                    <MDBNavLink to="">
                      <i class="fa fa-envelope"></i>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="">
                      <i class="fa fa-users"></i>
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <div className="vertical-line"></div>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="">
                      <i class="fa fa-user"></i> User
                      <i class="fa fa-caret-down"></i>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;
