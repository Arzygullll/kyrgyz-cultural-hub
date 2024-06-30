import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Offcanvas, Form, FormControl, Button, Nav } from "react-bootstrap";
import "./Navbar.css";
import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCart } from "../../context/CartContextProvider";
import { getProductsCountInCart } from "../../helpers/functions";
// import { ShoppingCart } from "@mui/icons-material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [badgeCount, setBadgeCount] = React.useState(0);
  const { addProductToCart } = useCart();
  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart);
  }, [addProductToCart]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //! search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">Kyrgyz Cultural Hub</Link>
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/activities">Чем заняться</Link>
              </li>
              <li>
                <Link to="/places">Куда поехать</Link>
              </li>
              <li>
                <Link to="/knowledge">Что нужно знать</Link>
              </li>
              <li>
                <Link to="/etnocollection">Этноколлекция</Link>
              </li>
              <li>
                <Link to="/contact">Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="menu-toggle" onClick={handleShow}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop={true}
        className="modal-offcanvas"
      >
        <Offcanvas.Body>
          {/* {user.email === ADMIN ? ( */}
          <Link to={"/admin"} style={{ textDecoration: "none" }}>
            <MenuItem sx={{ color: "white", display: "block" }}>
              <Typography className="textAdmin">АДМИН</Typography>
            </MenuItem>
          </Link>
          {/* ) : null} */}
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/login" className="auth-link">
              Войти
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="auth-link">
              Регистрация
            </Nav.Link>
          </Nav>
          <Link to={"/cart"}>
            <Badge badgeContent={badgeCount} color="success">
              <ModeOfTravelIcon sx={{ color: "white", marginBottom: "10px" }} />
            </Badge>
          </Link>
          <Form className="d-flex mb-3">
            <FormControl
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
          <Button
            variant="outline-success"
            className="search-button"
            onClick={(e) => setSearch(e.target.value)}
          >
            Поиск
          </Button>
          <Button variant="link" onClick={handleClose} className="close-button">
            Закрыть
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
