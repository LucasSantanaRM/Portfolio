import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Deixe-me<span className="purple"> apresentar-me </span> 
            </h1>
            <p className="home-about-body">
            Me apaixonei por programação e pelo menos aprendi
              alguma coisa, eu acho…🤷‍♂️
              <br />
              <br />Sou aprendiz em clássicos como
              <i>
                <b className="purple"> node.js, Javascript e React. </b>
              </i>
              <br />
              <br />
              Meu campo de interesse é construir novas &nbsp;
              <i>
                <b className="purple">tecnologias e produtos Web </b> em
                areas relacionadas a {" "}
                <b className="purple">
                Telecom.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível aplico também minha paixão pelo desenvolvimento de produtos
              com <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  estruturas Javascript modernas
                </b>
              </i>
              &nbsp; curto
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>encontre-me</h1>
            <p>
            Sinta-se livre para <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LucasSantanaRM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Lmsantana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucas-santana-215123b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lucas.m_santana/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
