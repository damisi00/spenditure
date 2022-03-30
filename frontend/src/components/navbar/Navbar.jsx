import React, { useState } from "react";
import Logo from "../../images/nav-logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="nav--mobile navbar-nav mb-2 mb-lg-0 text-center d-flex flex-row">
        <li className="nav-item px-2 d-block-sm">
          <a
            className="nav-link"
            aria-current="page"
            href="https://dev-spenditure.pantheonsite.io/blog/"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li>
        <li className="nav-item px-2 d-block-sm">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>
        <li className="nav-item px-2 d-block-sm">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="spenditure__navbar container-fluid">
      <div className="spenditure__navbar-links">
        <div id="logo" className="me-5">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="spenditure__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="spenditure__navbar-sign">
        <Link className="px-2 nav-item nav-link" to="/login">
          {" "}
          <button
            className="btn"
            style={{
              width: "63px",
              backGround: "white",
              color: "black",
              border: "1px solid red",
              borderColor: "red",
            }}
          >
            Sign in
          </button>{" "}
        </Link>
        <Link className="px-2 nav-item nav-link" to="/signup">
          <button type="button" className="btn btn-danger">
            Create a free account{" "}
          </button>
        </Link>
      </div>
      <div className="spenditure__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#666"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#666"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="spenditure__navbar-menu_container">
            <div className="spenditure__navbar-menu_container-links">
              <Menu />
              <div className="spenditure__navbar-menu_container-links-sign">
                <Link className="px-2 nav-item nav-link" to="/login">
                  {" "}
                  <button
                    className="btn w-100"
                    style={{
                      width: "63px",
                      backGround: "white",
                      color: "black",
                      border: "1px solid red",
                      borderColor: "red",
                    }}
                  >
                    Sign in
                  </button>{" "}
                </Link>
                <Link className="px-2 nav-item nav-link" to="/signup">
                  <button
                    type="button"
                    className="btn btn-danger w-100"
                    style={{ fontSize: "10px" }}
                  >
                    Create a free account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
