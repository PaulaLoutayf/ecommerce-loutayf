import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">PhotoFrames</Navbar.Brand>
        <Nav>
          <Nav.Link href="/category/a">Animals</Nav.Link>
          <Nav.Link href="/category/b">Landscapes</Nav.Link>
          <Nav.Link href="/category/c">Buildings</Nav.Link>
          <Nav.Link href="/cart" className="ml-5">
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
