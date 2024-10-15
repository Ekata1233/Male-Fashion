import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { NavDropdown } from 'react-bootstrap';

function Header() {
  const [auth,setAuth]=useAuth()
  function handleLogout(){
    setAuth({
      ...auth,
      user:null,
      token:""
    })
    localStorage.removeItem('login')
  }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            {
              !auth.user?(
                <>
                <Link to="/Signup">Signup</Link>
                <Link to="/Signin">Signin</Link>

                </>
              ):(
                <>
                <NavDropdown title={auth?.user?.name} id="basic-nav-dropdown">
                <Link to={`/Dashboard/${auth?.user?.role===1?"admin":"user"}`} className='dropdown-item'>Dashboard</Link>
                <Link onClick={handleLogout} to="Signin" className='dropdown-item'>Signout</Link>
                </NavDropdown>
                </>
              )
            }
            



          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header