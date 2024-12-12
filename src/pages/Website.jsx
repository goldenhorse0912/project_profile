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
import GameIntro from "../assets/projects/gameintro.png";


import Trader from "../assets/projects/Trader.png";
import tradingview_chart from "../assets/projects/tradingview_chart.png";
import trader_quantao from "../assets/projects/trader_quantao.png";
import preben from "../assets/projects/preben.png";
import headline from "../assets/projects/headline.png";
import jobposting from "../assets/projects/jobposting.png";
import CarteTheBlanche from "../assets/projects/CarteTheBlanche.png";
import { FaAlgolia } from "react-icons/fa";
import { AiFillPayCircle } from "react-icons/ai";



const Projects = () => {

  return (
    <Container fluid className="project-section" >
      <Particle />
      <Container>
        <h1 className="project-heading">
        <CgWebsite style={{ marginBottom: "2px" }} />  Web Development <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <CgWebsite />  Web <strong className="yellow">Works </strong>
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GameIntro}
              isBlog={false}
              title="Introducing the game"
              description="This shows you the introduction of all the games"
            
              ghLink="https://gameintro.vercel.app/"
            />
          </Col>
          <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <CgWebsite />  Trade <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trader}
              isBlog={false}
               title="Real-time Data streaming for trading, stock, market data"
              description="Integrate lightstreamer for react-time data streaming. Integrate AmChart for analyzing of stock and market data. Integrate OAuth of Azure"
              ghLink="https://www.loom.com/share/074d1c81d80a411aba44b5124dc86a1b?sid=8f44a100-884b-44f0-896e-5d20a9a1a04f"
           
           />
         
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={trader_quantao}
              isBlog={false}
              title="Quantao tranding MUI"
              description="Include features like real-time trading data, secure transaction options, and clear navigation. "
              ghLink="https://sharp-trade.vercel.app/"

            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={tradingview_chart}
              isBlog={false}
              title="Integration of Tradingview chart library"
              description="Implement Ag-Gird for table management, and react-native-statics-server and react-native-webview for the mobile version."
              ghLink=""

            />
          </Col>


          <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <FaAlgolia />  AI <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={headline}
              isBlog={false}
               title="Headline Generate"
              description="Create compelling and impactful headlines. Our headline generator creates headlines that are eye-catching and convey the essence of your product. "
              ghLink="https://headling-generator.vercel.app/"
           
           />
         
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={preben}
              isBlog={false}
              title="Discover Yourself: The Power of Self-Questioning"
              description="Understanding yourself is the key to personal and professional growth. By asking insightful questions, you can uncover your goals, preferences, and areas for improvement."
              ghLink="https://preben.rollebot.dk/"

            />
          </Col>
          <Col md={4} className="project-card">
         
          </Col>



          <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <AiFillPayCircle />  Payment <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobposting}
              isBlog={false}
               title="Post & Get a Job site"
              description="Post & Get a Job site having Real-time communication via Pusher.com, Payment Getway"
              ghLink="https://job-posting-theme.vercel.app/ "
           
           />
         
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={CarteTheBlanche}
              isBlog={false}
              title="Take the next step to become financial free"
              description="Whether you're entering new markets or aiming to expand market share, we provide strategies and insights to drive sustainable growth."
              ghLink="https://aslan-react-strip.vercel.app/"

            />
          </Col>
          <Col md={4} className="project-card"></Col>
       
          

        </Row>
      </Container>
    </Container>
  )
}

export default Projects