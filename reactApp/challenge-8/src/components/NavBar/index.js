import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Navbar,Nav} from 'react-bootstrap'
import './navbaar.css'

const NavBar=()=> {
  return (
   
<div>
  
<Navbar bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/">HOME</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/login">Login</Nav.Link>
    <Nav.Link href="/signup">Sign Up</Nav.Link>
    <Nav.Link href="/suit">About</Nav.Link>
    <Nav.Link href="/edit">Player Profile</Nav.Link>
  </Nav>
  </Container>
 
</Navbar>

  <div className="content-home">
  <h1>Welcome To Seteam Games</h1>

  </div>
  <div>
    
  </div>
 </div>



  );
}

export default NavBar;
