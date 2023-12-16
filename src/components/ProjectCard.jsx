import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <video
          width="500"
          height="250"
          autoPlay
          loop
          src={imgUrl}
        ></video>
        {/* <img width={"500px"}src={imgUrl} /> */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
