import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import ionic from "../assets/projects/ionic.png";
import webGL from "../assets/projects/webGL.png";

import V_camping from "../assets/projects/camping.png";


import { CgWebsite } from "react-icons/cg";
import vivid from "../assets/projects/vivid.png";
import villia from "../assets/projects/villia.png";
import restrance from "../assets/projects/restrance.png";



const Projects = () => {

  return (
    <Container fluid className="project-section" >
      <Particle />
      <Container>
        <h1 className="project-heading">
        <CgWebsite style={{ marginBottom: "2px" }} />  WebGL & React & WordPress <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <CgWebsite />  WebGL <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ionic}
              isBlog={false}
               title="Generate aniamtion book"
              description=" Fully responsive Unity WebGL WordPress integration plugin with template fallback implementation."
              ghLink="https://www.udoido.com"
           
           />
         
          </Col>

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
              imgPath={webGL}
              isBlog={false}
              title="Integration of Tradingview chart library"
              description="Implement Ag-Gird for table management, and react-native-statics-server and react-native-webview for the mobile version."
              ghLink="https://studio.foriero.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vivid}
              isBlog={false}
              title="VIVID Tours"
              description="The project showcases the best wine tour operators in Kelowna and the Okanagan Valley, offering tours of British Columbia's most iconic wineries, including
"
              ghLink="https://vivid.tours/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villia}
              isBlog={false}
              title="La Compagnie des Aventuriers"
              description="Introducing a project where you can learn proper behavior, know-how, and interpersonal skills in the great outdoors."
              ghLink="https://compagnie-aventuriers.fr/"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restrance}
              isBlog={false}
              title="Rotisserie Chicken Guarantee"
              description="This project showcases Boston Market's passion for serving the most delicious and mouthwatering chicken dishes. "
              ghLink="https://www.bostonmarket.com/"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects