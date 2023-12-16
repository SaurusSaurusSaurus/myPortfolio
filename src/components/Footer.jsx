import { Col, Container, Row } from "react-bootstrap"
import Mailchimp from "./Mailchimp"
import logo from "../assets/img/logoP.png"
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Mailchimp />
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center" text-sm-end>
                        <div className="social-icon">
                            <a href=""><img src={github} /></a>
                            <a href=""><img src={linkedin} /></a>
                        </div>
                        <p> CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;