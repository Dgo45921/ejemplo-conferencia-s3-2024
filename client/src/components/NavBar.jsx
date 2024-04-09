import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar({hideFileUploader, showFileUploader}) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ejemplo s3</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={showFileUploader}>Subir foto</Nav.Link>
            <Nav.Link onClick={hideFileUploader}>Ver fotos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
