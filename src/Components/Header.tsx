import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>HL</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/login' className='nav-link'>
              Login
            </NavLink>
            <NavLink to='/register' className='nav-link'>
              Register
            </NavLink>
            <NavDropdown title='Bộ sưu tập' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Nước hoa Pháp</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Nước hoa Dior</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Nước hoa Chanel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
