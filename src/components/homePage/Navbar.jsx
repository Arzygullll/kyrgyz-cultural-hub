import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Offcanvas, Form, FormControl, Button, Nav } from "react-bootstrap";
import "./Navbar.css";
import { MenuItem, Typography } from "@mui/material";

const Navbar = () => {
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
                <Link to="/blog">Блог</Link>
              </li>
              <li>
                <Link to="/about">О проекте</Link>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
