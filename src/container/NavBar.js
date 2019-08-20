import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { history, Role } from "../_helpers";
import { authenticationService } from "../_services";

class NavBar extends Component {
  state = {
    currentUser: null,
    isAdmin: false
  };

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin
      })
    );
  }

  logout = () => {
    authenticationService.logout();
    history.push("/");
  };

  render() {
    const { currentUser, isAdmin } = this.state;

    return (
      <Navbar expand="lg" variant="dark" className="bg__nav__bar">
        <div className="container">
          <Navbar.Brand>
            <Link to="/" className="my__white">
              React Templates
            </Link>
          </Navbar.Brand>
          <div className="navbar-right">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {!isAdmin && (
                  <>
                    <Link to="/" className="my__white pt-1 pr-3">
                      Getting Started
                    </Link>

                    <Link to="/about" className="my__white pt-1 pr-3">
                      About
                    </Link>

                    <Link to="/service" className="my__white pt-1 pr-3">
                      Service
                    </Link>

                    <Link to="/places" className="my__white pt-1 pr-3">
                      Places
                    </Link>

                    <Link to="/contact" className="my__white pt-1 pr-3">
                      Contact
                    </Link>
                  </>
                )}

                {isAdmin && (
                  <>
                    <Link to="/temples" className="my__white pt-1 pr-3">
                      Temples
                    </Link>

                    <Link to="/gallery" className="my__white pt-1 pr-3">
                      Gallery
                    </Link>
                    <span className="pt-1 mr-1 text-white">
                      | Welcome <span style={{ color: "red" }}>Admin </span>
                    </span>
                  </>
                )}

                {currentUser && (
                  <span onClick={this.logout} className="my__white pt-1 pr-1">
                    LogOut
                  </span>
                )}

                {!currentUser && (
                  <Link to="/signin" className="my__white pt-1">
                    SignIn
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
