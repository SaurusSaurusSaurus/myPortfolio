import React from "react";
import { Nav, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";

function TabPill() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "projImg1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "projImg1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "projImg1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "projImg1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "projImg1",
    },
  ];
  return (
      <Container>
        <Row>
          <Col>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                classname="nav-pills mb-5 justify-content-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tap Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                Tab content for Home
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Tab content for Profile
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
  );
}

export default TabPill;
