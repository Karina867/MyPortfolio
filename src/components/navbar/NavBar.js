import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo1.png';
import React, { useState, useEffect } from "react";

import navIcon1 from '../..//assets/img/nav-icon1.svg';
import navIcon2 from '../..//assets/img/nav-icon2.svg';
import navIcon3 from '../..//assets/img/nav-icon3.svg';

import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Contact } from "../contact/contact";
import { Projects } from "../projects/Projects";
import '../../components/navbar/NavBar.css';
import { Skills } from "../skills/Skills";



export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={"scrolled"}>
        <Container>
          <Navbar.Brand href="/">
            <div className="logo">
              <a> <img src={logo} alt="Logo" /> </a>
            </div>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href='/banner' className={'active navbar-link'} to='/banner'>Home</Nav.Link>
            <Nav.Link href='/skills' className={'navbar-link'}  to='/skills'>Skills</Nav.Link>
            <Nav.Link href='/projects' className={'navbar-link'} to='/projects'>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/karinacruzhdez/"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/cruzkarina07/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#contact'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
      </Switch>
    </Router>




  )
}