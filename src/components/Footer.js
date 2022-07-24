import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="#"><img src="#" alt="Icon" /></a>
            <a href="#"><img src="#" alt="Icon" /></a>
            <a href="#"><img src="#" alt="Icon" /></a>
              <a href="#"><img src="#" alt="Icon" /></a>
              <a href="#"><img src="#" alt="Icon" /></a>
              <a href="#"><img src="#" alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}