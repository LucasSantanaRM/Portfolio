import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import zabbix from "../../Assets/Projects/zabbix.png";
import IA from "../../Assets/Projects/IA.png";
import suicide from "../../Assets/Projects/suicide.png";
import wiki from "../../Assets/Projects/wiki.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IA}
              isBlog={false}
              title="IA Auto Hospedada"
              description="Uma IA instalada localmente usando o modelo LlAMA3 da meta,com ela temos possibilidades de criar os proprios agentes de IA para chatbots"
              demoLink="https://neural.lmsantana.com.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiki}
              isBlog={false}
              title="Wiki empresarial"
              description="Uma Wikipédia local implementada em docker container contendo varios tutoriais  para auxiliar os colaboradores da empresa"
              ghLink="https://wiki.sistemtelecom.com.br"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zabbix}
              isBlog={false}
              title="Zabbix"
              description="Implementação do software de monitoramento de rede zabbix  em 3 camadas + proxy para melhor desempenho do serviço"
                            
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Grafana"
              description="Instalação e configuração do software grafana para analise de dados"
              ghLink="https://grafana.com"
              // demoLink="https://www." <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Instalação e configuração do software Veeam para Backup de infra-estrutura de datacenters"
              description="Implementação de um sistema de backup usado internamente para proteger a infra estrutura de servidores com Vmware"
              ghLink="https://github.com/"
              // demoLink="https:///"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
