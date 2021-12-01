import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PhotoFrames
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/category/a">
            Animals
          </Nav.Link>
          <Nav.Link as={Link} to="/category/b">
            Landscapes
          </Nav.Link>
          <Nav.Link as={Link} to="/category/c">
            Buildings
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="ml-5">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
