import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandComponent from '../Brand/BrandComponent';
import "./NavBarComponent.css"

function NavBarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" >
      <Container fluid >
        <Navbar.Brand href="#home" > <BrandComponent/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text-light">Features</Nav.Link>
            <Nav.Link href="#pricing" className="text-light">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
}

export default NavBarComponent;