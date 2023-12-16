import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meteor from "../assets/img/meteor.jpg";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Carousel
                // autoPlay
                // autoPlaySpeed={1000}
                slide={true}
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meteor} alt="Image" width="250px" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meteor} alt="Image" width="250px" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meteor} alt="Image" width="250px" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meteor} alt="Image" width="250px" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
              <img className="background-image-left" src={""} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
