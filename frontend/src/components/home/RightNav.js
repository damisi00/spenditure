import React from "react";
import { Link } from "react-router-dom";
import Google from "../../images/download-google.svg";
import Apple from "../../images/download-apple.svg";
import Grocery from "../../images/grocery.svg";
import Ipad from "../../images/Ipadpro.svg";
import Uber from "../../images/uber1.svg";

const Items = ({ img, item, price, date }) => {
  return (
    <div className="">
      <div className="d-flex align-items-center gap-3">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="">
          <p>
            {item} <br /> <b>{price}</b>
            <br /> <span>{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="">
      <div className="d-flex gap-5">
        <span className="me-4">
          Categories
        </span>
        <span className="">
          <Link to="/">See all</Link>
        </span>
      </div>

      <div>
        <Items
          img={Grocery}
          item="Grocery"
          date="15, Aug. 2020"
          price="-$243.00"
        />
        <Items
          img={Ipad}
          item="Ipad pro 2020"
          date="10, Aug. 2020"
          price="-$799.00"
        />
        <Items img={Uber} item="Uber" date="5, Mar. 2020" price="+$50.00" />
      </div>
    </div>
  );
};

const Downloads = () => {
  return (
    <div className="download-store d-flex flex-column p-4">
      <h4 className="">Download the mobile App</h4>
      <div className="d-flex flex-column justify-content-center gap-2">
        <div>
          <Link to="/">
            <img src={Google} alt="google-playstore" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={Apple} alt="Apple-store" />
          </Link>
        </div>
      </div>
    </div>
  );
};
const RightNav = () => {
  return (
    <div className="right-nav position-relative">
      <div className="right-items">
        <div className="position-relative">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            3
          </span>
          <a href="/">
            <img className="bell" src="./Images/bell.svg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <Downloads />
      </div>
      <div className="">
        <Categories />
      </div>
    </div>
  );
};

export default RightNav;
