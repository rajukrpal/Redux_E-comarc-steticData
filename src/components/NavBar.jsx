import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";

const NavBar = () => {
  const {items} = useSelector(state=>state.Cart)
  return (
    <div>
      <Navbar expand="lg" className="bg-primary px-2 fixed-top">
        <Container fluid>
          <Navbar.Brand style={{color:"white"}}>Redux Toolkit</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                {" "}
                <NavLink
                activeClassName="active"
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </Nav.Link>
            </Nav>

            <Nav.Link> </Nav.Link>
            <button type="button" className="btn btn btn-info position-relative">
              <Link
                style={{ textDecoration: "none", color: "red" }}
                to={"/cart"}
              >
                <GiShoppingCart />
              </Link>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {items.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
