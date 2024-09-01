import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/sLogo.png";
import { Link } from "react-router-dom";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiOutlinePayCircle
} from "react-icons/ai";
import { GiSkills, GiTrade } from "react-icons/gi"
import { FaFigma, FaReact, FaTrademark, FaUnity } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiWebgl } from "react-icons/si";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <FaUnity style={{ marginBottom: "2px" }} /> Unity
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/figma"
                onClick={() => updateExpanded(false)}
              >
                <FaFigma style={{ marginBottom: "2px" }} /> Figma
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/trading"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlinePayCircle
                  style={{ marginBottom: "2px" }}
                />{" "}
                Trade & AI & Payment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/webSite"
                onClick={() => updateExpanded(false)}
              >
                <FaReact
                  style={{ marginBottom: "2px" }}
                />{" "}
                WebGL & React & WordPress
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>

         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
