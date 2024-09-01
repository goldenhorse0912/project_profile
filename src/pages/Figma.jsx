import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import JP from "../assets/projects/JP.png";
import restrance_figma from "../assets/projects/restrance_figma.png";
import Simple_LP from "../assets/projects/Simple_LP.png";
import Cloth_LP from "../assets/projects/Cloth_LP.png";
import Trading_LP from "../assets/projects/trading.png";
import Cripto from "../assets/projects/Cripto.png";
import editor_LP from "../assets/projects/editor_LP.jpg";
import mobile_LP from "../assets/projects/mobile_LP.png";
import phone_page from "../assets/projects/phone_page.png"
import { FaFigma, FaUnity } from "react-icons/fa";




const Projects = () => {

  return (
    <Container fluid className="project-section" >
      <Particle />
      <Container>
        <h1 className="project-heading">
        <FaFigma style={{ marginBottom: "2px" }} /> Figma <strong className="yellow">Design </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
      
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JP}
              isBlog={false}
              title="Design a seamless WordPress UI/UX"
              description="Design and develop a seamless WordPress UI/UX. Focus on user-friendly navigation, responsive layouts, and aesthetic appeal. Ensure intuitive, engaging, and mobile-optimized experiences for all users."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-46871&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A46868&starting-point-node-id=174%3A54271"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restrance_figma}
              isBlog={false}
              title="Restaurant LP Design"
              description="We prioritized clean visuals, intuitive navigation, and mobile responsiveness. We highlighted the menu, reviews, and reservations in an attractive and user-friendly layout."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-62969&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A58568"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Simple_LP}
              isBlog={false}
              title="Simple LP Design"
              description="Create simple Figma designs with clean layouts, minimal colors, and easy-to-read fonts. Focus on intuitive navigation and responsive elements to ensure a seamless user experience across all devices."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-80621&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A67462"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cloth_LP}
              isBlog={false}
              title="Cloth Shop Design"
              description="Design a clothing store in Pygma with a sleek, minimalist layout. Highlight key products, categories, and promotions. "
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-78264&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A78263"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trading_LP}
              isBlog={false}
              title="Trading platform design "
              description="We created a design for Figma's trading platform with a clear and intuitive interface. We used a clean, organized layout with minimal distractions to improve user focus and decision-making."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=4-139908&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=4%3A139906"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cripto}
              isBlog={false}
              title="Designing a cryptocurrency store "
              description="We designed a cryptocurrency store on Figma with a modern and secure interface. We used a clean, intuitive layout and easy navigation to create a seamless shopping experience in the crypto space."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=4-101005&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=4%3A39383"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor_LP}
              isBlog={false}
              title="Designing a seamless editing experience"
              description="Focused on user-friendly text and code editing features, customizable toolbars, and easy navigation. "
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=3-39704&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=min-zoom&content-scaling=fixed&page-id=3%3A28473"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile_LP}
              isBlog={false}
              title="Creating mobile designs"
              description="Focused on simplicity, clear typography, and streamlined user flows to enhance the mobile user experience."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=2-31693&node-type=CANVAS&t=iwe2CHRdcSkzZoil-0&scaling=min-zoom&content-scaling=fixed&page-id=2%3A30079"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phone_page}
              isBlog={false}
              title="Designing a clean shopping app for mobile phones"
              description="Featured large images, easy navigation, and simple checkout processes. Prioritized touch-friendly elements and responsive design for a smooth mobile shopping experience."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=90-69298&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down&content-scaling=fixed&page-id=89%3A69247&starting-point-node-id=90%3A69298"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects