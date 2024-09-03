import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillSkype,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../../assets/sLogo.png";
import { BsChatQuote, BsDiscord, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" >
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/yara0918"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/yznxQVdrtkLo"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="telegram"
              >
                <AiFillSkype />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/380997065108"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.gg/gh_0912"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="discord"
              >
                <BsDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.chatwork.com/GH0912"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="discord"
              >
                <BsChatQuote />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer