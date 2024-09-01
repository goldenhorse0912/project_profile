import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import V_camping from "../assets/projects/camping.png";
import V_education from "../assets/projects/education.png";
import N_NCardGame from "../assets/projects/cardGame.png";
import V_BikeGame from "../assets/projects/bikegame.png";
import V_CarGame from "../assets/projects/cargame.png";
import V_Fighting from "../assets/projects/fighting.png";
import { FaUnity } from "react-icons/fa";





const Projects = () => {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <FaUnity style={{ marginBottom: "2px" }} />  Unity <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_camping}
              isBlog={false}
              title="Camping Intro Metaverse with WebGL"
              description="I have created a camping intro site using UNITY3D. 3D characters can visit a fictional campground and chat with each other using Mirror."
              ghLink="https://www.loom.com/share/a0f2ca4184894488a5cd4e0e01de8c31?sid=f2c9a91e-f752-42ff-b6a2-cbc8f04ac8fc"

            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={N_NCardGame}
              isBlog={false}
              title="Multiplayer Cardgame (Android , IOS):"
              description="I designed the cards and UI and used Unity's networking or mirror for multiplayer. Implemented game logic and turn management and tested thoroughly before deployment. "
              ghLink="https://www.loom.com/share/1d4c44c1d5744702bc70dda894d09a8c?sid=fbb02753-9698-43e8-94f3-d3d6fe6d3d1b"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_education}
              isBlog={false}
              title="Education Backend / Frontend / mobile / IOS"
              description="Enhance your children's gaming experience with our educational voice pack! Packed with essential phrases, professionally recorded by a female voice artist. Ideal for educational children's games."
              ghLink="https://www.loom.com/share/5cdacc385cc24e158d67d60e01d7ebde?sid=55cd7632-751d-443c-84e2-427fa17a1800"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_BikeGame}
              isBlog={false}
              title="Mega Ramp Bike stunt Video"
              ghLink="https://www.loom.com/share/301994ecc2d64846a44da14f0ef935bb?sid=55ad3211-445a-4629-a262-b994f5136585"
              description="This package is designed for developers seeking an engaging and responsive arcade-style bike simulation experience in Unity. It offers extensive customization options, making it suitable for a wide range of racing and simulation games."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_CarGame}
              isBlog={false}
              title="Driving Simulator"
              ghLink="https://www.loom.com/share/15c0d62519864f94932e7612a4ba62f6?sid=e230042e-448c-45b3-b4f4-8bf0b7f0dd53"
              description="City Car Driving Simulator is an objective (mission) based driving game. Players are able to take a free ride and complete the various objectives such as races, pursuits, checkpoints, and trailblazers. "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_Fighting}
              isBlog={false}
              title="Driving Simulator"
              description="Master game audio with our FX library. Get Mortal Kombat-style effects, karate vocals, and royalty-free music loops. Perfect for intense combat scenes and precise sound design. Elevate your projects now!"
            
              ghLink="https://www.loom.com/share/ff399cce07814947a198aaebb5934bf9?sid=10eb7ad1-af6d-48ab-ab27-3ee73b654261"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects