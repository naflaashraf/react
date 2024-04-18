import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
        <Navbar.Brand href="#home">INCOME-EXPENSES TRACKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"className=''>Home</Nav.Link>
            <Nav.Link href="#link"className=''>Add Transaction</Nav.Link>
            <Nav.Link href="#link"className=''>Dashboard</Nav.Link>
            <Nav.Link href="#link"className=''>Login</Nav.Link>
            <Nav.Link href="#link"className=''>Register</Nav.Link>
            <Nav.Link href="#link"className=''>Logout</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default BasicExample;