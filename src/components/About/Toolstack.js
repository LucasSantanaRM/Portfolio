import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        <Col xs={4} md={2} className="tech-icons" onMouseOver={() => console.log("Mouse over Macos")} onMouseOut={() => console.log("Mouse out Macos")}>
          <SiMacos />
          <span className="tooltip" >MacOS</span>
        </Col>,
        <Col xs={4} md={2} className="tech-icons" onMouseOver={() => console.log("Mouse over Visual Studio Code")} onMouseOut={() => console.log("Mouse out Visual Studio Code")}>
          <SiVisualstudiocode />
          <span className="tooltip" >Visual Studio Code</span>
        </Col>,
        <Col xs={4} md={2} className="tech-icons" onMouseOver={() => console.log("Mouse over Postman")} onMouseOut={() => console.log("Mouse out Postman")}>
          <SiPostman />
          <span className="tooltip" >Postman</span>
        </Col>,
        <Col xs={4} md={2} className="tech-icons" onMouseOver={() => console.log("Mouse over Slack")} onMouseOut={() => console.log("Mouse out Slack")}>
          <SiSlack />
          <span className="tooltip" >Slack</span>
        </Col>,
        <Col xs={4} md={2} className="tech-icons" onMouseOver={() => console.log("Mouse over Vercel")} onMouseOut={() => console.log("Mouse out Vercel")}>
          <SiVercel />
          <span className="tooltip" >Vercel</span>
        </Col>,
      ]}
    </Row>
  );
}

export default Toolstack;