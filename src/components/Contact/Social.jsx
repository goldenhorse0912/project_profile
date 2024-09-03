import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillSkype,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './Social.css'
import { BsChat, BsChatFill, BsChatQuote, BsDiscord } from 'react-icons/bs';

const Social = () => {
  return (
    <Container style={{ padding: '30px', marginTop: "180px", height: `${window.innerHeight - 360}px` }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className='contact-text'>
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/yara0918"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"

              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://join.skype.com/invite/yznxQVdrtkLo"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillSkype />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://wa.me/380997065108"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://discord.gg/gh_0912"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <BsDiscord />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.chatwork.com/GH0912"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
           
                <BsChatQuote />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Social