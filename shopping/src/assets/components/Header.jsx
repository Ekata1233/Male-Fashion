import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useAuth } from "../../context/auth";
import Searchinput from "./Searchinput";
import { useCart } from "../../context/cart";
import { useHeart } from "../../context/heartlist";

function Header() {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [heart, setHeart] = useHeart();
  const navigate = useNavigate();

  // Sync cart and heart values from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedHeart = JSON.parse(localStorage.getItem("heartlist")) || [];
    setCart(storedCart);
    setHeart(storedHeart);
  }, []); // Run only on initial render

  // Update localStorage whenever cart or heart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("heartlist", JSON.stringify(heart));
  }, [cart, heart]);

  // Handle logout functionality
  function handleLogout() {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    // Clear cart and heart data
    setCart([]);
    setHeart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("heartlist");
    localStorage.removeItem("login");

    // Redirect to Signin page
    navigate("/Signin");
  }

  return (
    <div className="navFix">
      <div className="divNavBlack py-3">
        <Container className="d-flex justify-content-between px-5">
          <div>
            <h6>Free shipping, 30-day return or refund guarantee.</h6>
          </div>
          <div className="d-flex">
            {!auth.user ? (
              <>
                <Nav.Link as={Link} to="/Signup" className="px-md-3 px-4">
                  SIGNUP
                </Nav.Link>
                <Nav.Link as={Link} to="/Signin" className="px-md-3 px-4">
                  SIGNIN
                </Nav.Link>
                <Nav.Link as={Link} to="/FAQs" className="px-md-3 px-4">
                  FAQs
                </Nav.Link>
              </>
            ) : (
              <NavDropdown title={auth?.user?.name} id="basic-nav-dropdown">
                <Link
                  to={`/Dashboard/${
                    auth?.user?.role === 1 ? "admin" : "user"
                  }`}
                  className="dropdown-item"
                >
                  Dashboard
                </Link>
                <Link
                  onClick={handleLogout}
                  to="#"
                  className="dropdown-item"
                >
                  Signout
                </Link>
              </NavDropdown>
            )}
          </div>
        </Container>
      </div>
      <Navbar
        expand="lg"
        className="py-4 shadow-bottom"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <Container className="ps-5">
          <Navbar.Brand as={Link} to="/" className="me-auto">
            <img src="/main-logo.png" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/" className="px-4 nav-line m-1">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Shop" className="px-4 nav-line m-1">
                  Shop
                </Nav.Link>
                <NavDropdown
                  title="Pages"
                  id="basic-nav-dropdown"
                  className="px-4 nav-line m-1 pages custom-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/About">
                    About Us
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={Link} to="/ShoppingCart">
                    Shopping Cart
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={Link} to="/BlogDetails">
                    Blog Details
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Accessories">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Shoes">
                    Shoes
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/Blog" className="px-4 nav-line m-1">
                  Blog
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Contact"
                  className="nav-line m-1"
                >
                  Contact
                </Nav.Link>
              </Nav>

              <Nav className="ms-auto">
                <Searchinput />
                <Nav.Link as={Link} to="/Heart" className="px-3">
                  <img src="/heart.png" alt="heart" />
                  <sup>{heart?.length || 0}</sup>
                </Nav.Link>
                <Nav.Link as={Link} to="/Cart" className="px-3 position-relative">
                  <img src="/cart.png" alt="cart" />
                  <sup>{cart?.length || 0}</sup>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
