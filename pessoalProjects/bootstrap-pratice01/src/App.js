import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Alexandre</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Projects</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default App;
