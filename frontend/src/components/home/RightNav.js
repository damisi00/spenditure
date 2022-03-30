import React from "react";

const RightNav = () => {
  return (
    <div>
      <div className="right-items">
        <div>
          <div className="ms-2">
            <button
              className="border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className="">
                <img src="./Images/Search-icon.svg" alt="" />
              </span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "40px 10px" }} className="position-relative">
          <span
            style={{ right: "30px" }}
            className="position-absolute top-5 translate-middle badge rounded-pill bg-danger"
          >
            3
          </span>
          <a href="/">
            <img src="./Images/bell.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="ms-1">
        <a href="/">
          <img
            style={{ width: "35.59px", height: "30.59px" }}
            src="./Images/web-add.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default RightNav;
