import React from "react";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logoP.png";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [background, setBackground] = useState("")

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log("Que hay, bueno tamos fallando en algo")

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const handleClick = () => {
    if(background) {
      setBackground("");
    }
    else { 
      setBackground("#0D0D0D");
    }
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} style={{ backgroundColor: background }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width={"130px"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/SaurusSaurusSaurus" target="_blank">
                <img
                  src={github}
                  alt="github"
                />
              </a>
              <a href="https://www.linkedin.com/in/leydi-pretell" target="_blank">
                <img
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
