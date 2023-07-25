import { Container, Nav, Navbar as NavbarBS, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-centmer"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, -25%)",
              }}
            >
              3
            </div>
          </Button>
        </Container>
      </NavbarBS>
    </>
  );
}
