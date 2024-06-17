import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá a todos, Eu sou <span className="purple">Lucas Santana </span>
            from <span className="purple"> Rondonia, Brasil.</span>
            <br />
            Atualmente trabalho como Analista de redes na Uni Internet.
            <br />
            Estou cursando engenharia de software na faculdade Unopar.
          
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          <ul>
            <li className="about-activity">
              <ImPointRight /> Testes com inteligencia artificial
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever blogs de tecnologia e tutoriais
            </li>
            <li className="about-activity">
              <ImPointRight /> Assistir filmes de sci-fi
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Mesmo sem saber muito, o esforço em programar é o primeiro passo para o sucesso.”{" "}
          </p>
          <footer className="blockquote-footer">Lucas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
