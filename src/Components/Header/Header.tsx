import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>
          <img width={130} src='https://wikici.com/Upload/chu-ky/chu-ky-ten-linh-livingston-sanserif-otf.jpeg' alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className={style.navLink}>
              Trang chủ
            </NavLink>
            <NavLink to='/productlist'  className={style.navLink}>
              Sản phẩm
            </NavLink>
            <NavLink to='/login' className={style.navLink}>
              Đăng nhập
            </NavLink>
            <NavLink to='/register' className={style.navLink}>
              Đăng kí
            </NavLink>
            <NavDropdown title='Bộ sưu tập' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Dụng cụ make</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Sản phẩm chăm sóc da</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Phấn phủ </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Son môi </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
