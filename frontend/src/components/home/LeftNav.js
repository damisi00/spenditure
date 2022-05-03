import React from "react";
import Logo from "../../images/LOGOnew.png";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="">
      <div className="">

        <div id="logo" className="mb-3 me-3">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <ul id="nav" className="d-flex flex-column">
          <li className="">
            <Link
              to="/homepage"
              className="menu-list"
              style={{ padding: "5px", display: "flex" }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.9487 9.04847L9.77668 0.404627C9.71784 0.342222 9.64795 0.292712 9.57102 0.258932C9.49408 0.225151 9.4116 0.207764 9.32831 0.207764C9.24501 0.207764 9.16254 0.225151 9.0856 0.258932C9.00866 0.292712 8.93877 0.342222 8.87993 0.404627L0.707948 9.04847C0.469871 9.30047 0.334961 9.64278 0.334961 9.99979C0.334961 10.7411 0.904361 11.3438 1.6047 11.3438H2.46575V17.5117C2.46575 17.8834 2.74946 18.1837 3.10062 18.1837H8.05856V13.4796H10.2806V18.1837H15.556C15.9072 18.1837 16.1909 17.8834 16.1909 17.5117V11.3438H17.0519C17.3892 11.3438 17.7126 11.2031 17.9506 10.949C18.4447 10.424 18.4447 9.57348 17.9487 9.04847Z" />
              </svg>
              <span style={{ marginLeft: "10px" }}>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="menu-list"
              style={{ padding: "5px", display: "flex" }}
            >
              <img src="./Images/tracker-icon.svg" alt="" />
              <span style={{ marginLeft: "10px" }}>Tracker</span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="menu-list"
              style={{ padding: "5px", display: "flex" }}
            >
              <img src="./Images/budget-icon.svg" alt="" />
              <span style={{ marginLeft: "10px" }}>Budget</span>
            </Link>
          </li>

          <li>
            <Link
              to="/account"
              className="menu-list"
              style={{ padding: "5px", display: "flex" }}
            >
              <img src="./Images/user-icon.svg" alt="" />
              <span style={{ marginLeft: "10px" }}>Account</span>
            </Link>
          </li>
        </ul>


        <ul className="">
          <li>
            <Link
              className="menu-list"
              to="/"
              style={{ padding: "5px", margin: "20px", display: "flex" }}
            >
              <img src="./Images/question-icon.svg" alt="" />
              <span style={{ marginLeft: "10px" }}>Get Help</span>
            </Link>
          </li>
          <li>
            <Link
              className="menu-list"
              to="/"
              style={{ padding: "5px", margin: "20px", display: "flex" }}
            >
              <img src="./Images/settings-icon.svg" alt="" />
              <span style={{ marginLeft: "10px" }}>Settings</span>
            </Link>
          </li>

          <li
            style={{
              padding: "5px",
              margin: "20px",
              marginTop: "230px",
              marginLeft: "60px",
            }}
          >
            <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
              <span>Logout</span>
              <img
                style={{ marginLeft: "10px" }}
                src="./Images/logout-icon.svg"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
