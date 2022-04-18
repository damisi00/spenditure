import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="mobile--nav position-relative d-md-none d-lg-none justify-content-center flex-row bg-light">
        {/* <!-- Mobile Nav Fixed bottom --> */}
        <nav id="nav" className="d-flex">
          <div className="nav-item px-1">
            <a
              className="nav-link d-flex flex-column text-center"
              href="./homepage"
            >
              <div>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#c3c2c8"
                >
                  <path d="M17.9487 9.04847L9.77668 0.404627C9.71784 0.342222 9.64795 0.292712 9.57102 0.258932C9.49408 0.225151 9.4116 0.207764 9.32831 0.207764C9.24501 0.207764 9.16254 0.225151 9.0856 0.258932C9.00866 0.292712 8.93877 0.342222 8.87993 0.404627L0.707948 9.04847C0.469871 9.30047 0.334961 9.64278 0.334961 9.99979C0.334961 10.7411 0.904361 11.3438 1.6047 11.3438H2.46575V17.5117C2.46575 17.8834 2.74946 18.1837 3.10062 18.1837H8.05856V13.4796H10.2806V18.1837H15.556C15.9072 18.1837 16.1909 17.8834 16.1909 17.5117V11.3438H17.0519C17.3892 11.3438 17.7126 11.2031 17.9506 10.949C18.4447 10.424 18.4447 9.57348 17.9487 9.04847Z" />
                </svg>
              </div>
              <small>Home</small>
            </a>
          </div>
          <div className="nav-item px-1 ">
            <Link
              className="nav-link d-flex flex-column text-center"
              to="/tracker"
            >
              <div>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2697 0.207764H2.28067C1.18152 0.207764 0.282227 1.10706 0.282227 2.2062V16.1953C0.282227 17.2944 1.18152 18.1937 2.28067 18.1937H16.2697C17.3689 18.1937 18.2682 17.2944 18.2682 16.1953V2.2062C18.2682 1.10706 17.3689 0.207764 16.2697 0.207764ZM5.02852 14.1968C4.34156 14.1968 3.77949 13.7472 3.77949 13.1976V8.20152C3.77949 7.65195 4.34156 7.2023 5.02852 7.2023C5.71548 7.2023 6.27754 7.65195 6.27754 8.20152V13.1976C6.27754 13.7472 5.71548 14.1968 5.02852 14.1968ZM9.52501 14.1968C8.83804 14.1968 8.27598 13.7472 8.27598 13.1976V5.20386C8.27598 4.65429 8.83804 4.20464 9.52501 4.20464C10.212 4.20464 10.774 4.65429 10.774 5.20386V13.1976C10.774 13.7472 10.212 14.1968 9.52501 14.1968ZM14.0215 14.1968C13.3345 14.1968 12.7725 13.7472 12.7725 13.1976V11.1992C12.7725 10.6496 13.3345 10.2 14.0215 10.2C14.7085 10.2 15.2705 10.6496 15.2705 11.1992V13.1976C15.2705 13.7472 14.7085 14.1968 14.0215 14.1968Z"
                    fill="#C3C2C8"
                  />
                </svg>
              </div>
              <small>Tracker</small>
            </Link>
          </div>
          <div id="pop-menu" className="add--button nav-item">
            <img src="./Images/Add-icon.svg" alt="" />
          </div>
          <div className="nav-item px-1 ms-2">
            <Link
              className="nav-link d-flex flex-column text-center"
              to="/budget"
            >
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.80707 16.2648V8.71512C9.80707 7.67704 10.6496 6.8277 11.7003 6.8277H20.22V5.884C20.22 4.84592 19.368 3.99658 18.3267 3.99658H5.07392C4.02316 3.99658 3.18066 4.84592 3.18066 5.884V19.0959C3.18066 20.134 4.02316 20.9833 5.07392 20.9833H18.3267C19.368 20.9833 20.22 20.134 20.22 19.0959V18.1522H11.7003C10.6496 18.1522 9.80707 17.3029 9.80707 16.2648ZM12.647 8.71512C12.1263 8.71512 11.7003 9.13979 11.7003 9.65882V15.3211C11.7003 15.8401 12.1263 16.2648 12.647 16.2648H21.1666V8.71512H12.647ZM15.4868 13.9055C14.7011 13.9055 14.0669 13.2732 14.0669 12.4899C14.0669 11.7067 14.7011 11.0744 15.4868 11.0744C16.2725 11.0744 16.9068 11.7067 16.9068 12.4899C16.9068 13.2732 16.2725 13.9055 15.4868 13.9055Z"
                    fill="#C3C2C8"
                  />
                </svg>
              </div>
              <small>Budget</small>
            </Link>
          </div>
          <div className="nav-item px-1">
            <a
              className="nav-link  d-flex flex-column text-center"
              href="./account.html"
            >
              <div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.99121 5.2062V19.1953C3.99121 20.2944 4.88052 21.1937 5.98965 21.1937H19.9787C21.0779 21.1937 21.9772 20.2944 21.9772 19.1953V5.2062C21.9772 4.10706 21.0779 3.20776 19.9787 3.20776H5.98965C4.88052 3.20776 3.99121 4.10706 3.99121 5.2062ZM15.9818 9.20308C15.9818 10.8618 14.6429 12.2007 12.9842 12.2007C11.3255 12.2007 9.98653 10.8618 9.98653 9.20308C9.98653 7.54438 11.3255 6.20542 12.9842 6.20542C14.6429 6.20542 15.9818 7.54438 15.9818 9.20308ZM6.98887 17.1968C6.98887 15.1984 10.9857 14.0993 12.9842 14.0993C14.9826 14.0993 18.9795 15.1984 18.9795 17.1968V18.1961H6.98887V17.1968Z"
                    fill="#C3C2C8"
                  />
                </svg>
              </div>
              <small>Account</small>
            </a>
          </div>
        </nav>

        <div
          id="pop-"
          className="position-absolute bg-danger"
          style={{
            maxWidth: "300px",
            left: "50px",
            right: "50px",
            bottom: "60px",
            borderRadius: "20px",
            display: "none",
          }}
        >
          <div className="d-flex text-white align-items-center justify-content-center p-4">
            <img src="/Images/Add-icon.svg" alt="" />
            <p>Add transaction</p>
          </div>

          <div id="nav" className="nav d-flex flex-column nav-tabs ps-5">
            <div className="nav-item py-3">
              <a
                className="nav-link "
                style={{ padding: "5px", display: "flex" }}
                href="./home.html"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#c3c2c8"
                >
                  <path d="M17.9487 9.04847L9.77668 0.404627C9.71784 0.342222 9.64795 0.292712 9.57102 0.258932C9.49408 0.225151 9.4116 0.207764 9.32831 0.207764C9.24501 0.207764 9.16254 0.225151 9.0856 0.258932C9.00866 0.292712 8.93877 0.342222 8.87993 0.404627L0.707948 9.04847C0.469871 9.30047 0.334961 9.64278 0.334961 9.99979C0.334961 10.7411 0.904361 11.3438 1.6047 11.3438H2.46575V17.5117C2.46575 17.8834 2.74946 18.1837 3.10062 18.1837H8.05856V13.4796H10.2806V18.1837H15.556C15.9072 18.1837 16.1909 17.8834 16.1909 17.5117V11.3438H17.0519C17.3892 11.3438 17.7126 11.2031 17.9506 10.949C18.4447 10.424 18.4447 9.57348 17.9487 9.04847Z" />
                </svg>
                <span style={{ marginLeft: "10px" }}>Home</span>
              </a>
            </div>
            <div className="nav-item py-3">
              <a
                className="nav-link "
                style={{ padding: "5px", display: "flex" }}
                href="/tracker"
              >
                <img src="./Images/tracker-icon.svg" alt="" />
                <span style={{ marginLeft: "10px" }}>Tracker</span>
              </a>
            </div>
            <div className="nav-item py-3">
              <a
                className="nav-link "
                style={{ padding: "5px", display: "flex" }}
                href="/budget"
              >
                <img src="./Images/budget-icon.svg" alt="" />
                <span style={{ marginLeft: "10px" }}>Budget</span>
              </a>
            </div>
            <div className="nav-item py-3 pb-5">
              <a
                className="nav-link "
                style={{ padding: "5px", display: "flex" }}
                href="./account.html"
              >
                <img src="./Images/user-icon.svg" alt="" />
                <span style={{ marginLeft: "10px" }}>Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
