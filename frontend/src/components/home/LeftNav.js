import React from "react";
import Logo from "../../images/LOGOnew.png";
import HomeIcon from "../../images/home-icon.png";
import Trackericon from "../../images/tracker-icon.png";
import BudgetIcon from "../../images/budget-icon.png";
import UserIcon from "../../images/user-icon.png";
import HelpIcon from "../../images/question-icon.png";
import SettingsIcon from "../../images/settings-icon.png";
import LogoutIcon from "../../images/logout-icon.png";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-5">
        <div id="logo" className="mb-3">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <ul id="nav" className="d-flex flex-column mt-5 position-relative">
          <li>
            <Link to="/homepage" className="menu-list">
              <img src={HomeIcon} alt="" />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/" className="menu-list">
              <img src={Trackericon} alt="" />
              <span>Tracker</span>
            </Link>
          </li>

          <li>
            <Link to="/" className="menu-list">
              <img src={BudgetIcon} alt="" />
              <span>Budget</span>
            </Link>
          </li>

          <li>
            <Link to="/account" className="menu-list">
              <img src={UserIcon} alt="" />
              <span>Account</span>
            </Link>
          </li>
          <li>
            <Link className="menu-list" to="/">
              <img src={HelpIcon} alt="" />
              <span>Get Help</span>
            </Link>
          </li>
          <li>
            <Link className="menu-list" to="/">
              <img src={SettingsIcon} alt="" />
              <span>Settings</span>
            </Link>
          </li>

          <li>
            <Link className="menu-list" to="/">
              <img src={LogoutIcon} alt="" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
