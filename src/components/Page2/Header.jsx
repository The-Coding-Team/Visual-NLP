import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";

const Header = () => {
  return (
    <div
      className="d-flex justify-content-between p-4"
      style={{ borderBottom: "1px solid black" }}
    >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;