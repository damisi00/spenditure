import React from "react";
import Background from "../images/background-image.svg";
import Logo from "../images/Logo.svg";
import Reveal from "../images/reveal-pass.svg";
import Google from "../images/icons8-google.svg";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./signUp/SignUp";
import LandingPage from "./landingPage/LandingPage";
import { useState } from "react";
import Home from "./home/Home";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${Background})`,
        minHeight: "60em",
        height: "100vh",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section
        className="d-block container d-flex flex-column justify-content-center"
        style={{ maxWidth: "400px" }}
      >
        <div className="text-center">
          <Link style={{ textDecoration: "none" }} to="/index">
            <img style={{ width: "80px" }} src={Logo} alt="logo" />{" "}
            <h6 className="text-light">SPENDITURE</h6>{" "}
          </Link>

          <Routes>
            <Route path="/index" element={<LandingPage />}></Route>
          </Routes>
        </div>
        <div className="card p-3" style={{ borderRadius: "20px" }}>
          <div className="card-body">
            <div className="card-title">
              <h4 className="text-center text-danger">
                Sign In to your Account
              </h4>
            </div>
            <div className="card-subtitle text-center">
              <h6 className="fw-bold">
                Don't have an Account?{" "}
                <Link className="text-danger" to="/signup">
                  Sign Up
                </Link>
              </h6>
              <Routes>
                <Route path="/signup/*" element={<SignUp />}></Route>
              </Routes>
            </div>
            <div className="card-text mt-3">
              <div className="d-flex justify-content-center">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  className="form w-100"
                >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control border-0 border-bottom shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="name@domain.com"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        handleEmailChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 position-relative">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control border-0 border-bottom shadow-none"
                      id="exampleInputPassword1"
                      placeholder="***********"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        handlePasswordChange(e);
                      }}
                    />{" "}
                    <span
                      style={{ right: "30px", cursor: "pointer" }}
                      className="position-absolute top-50 translate-end"
                    >
                      {" "}
                      <img src={Reveal} alt="reveal" />{" "}
                    </span>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </label>
                    <span className="float-end">
                      <Link to="#" style={{ textDecoration: "none" }}>
                        Forgot Password?
                      </Link>
                    </span>
                  </div>

                  <Link to="/homepage">
                    {" "}
                    <button
                      value="Submit"
                      type="submit"
                      className="btn btn-info mt-3"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#3CB8C9",
                      }}
                    >
                      Login
                    </button>
                  </Link>
                  <Routes>
                    <Route path="/homepage" element={<Home />}></Route>
                  </Routes>
                  <p className="text-center mt-3">or</p>

                  <div className="text-center d-flex justify-content-center">
                    <button
                      className="btn-google p-1 w-100 text-dark"
                      style={{ borderRadius: "10px" }}
                    >
                      <span>
                        <img
                          className="me-3"
                          style={{ width: "20px" }}
                          src={Google}
                          alt=""
                        />
                      </span>
                      Sign in with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  crossorigin="anonymous"
></script>;

export default SignIn;
