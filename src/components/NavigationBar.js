import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Institut de l'Internet et du Multimédia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
            <BrowserRouter>  
              <Link to="/">Accueil</Link>
            </BrowserRouter>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
            <BrowserRouter>
              <Link to="/Cours">Cours</Link>
            </BrowserRouter>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
            <BrowserRouter>  
              <Link to="/">Profil</Link>
            </BrowserRouter>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
            <BrowserRouter>  
              <Link to="/">Notes</Link>
            </BrowserRouter>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
            <BrowserRouter>  
              <Link to="/">Calendrier</Link>
            </BrowserRouter>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)