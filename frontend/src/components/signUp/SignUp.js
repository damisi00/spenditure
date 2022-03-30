import React from "react";
import Background from "../../images/bg-img.jpg";
import Logo from "../../images/Logo.svg";
import Reveal from "../../images/reveal-pass.svg";
import Google from "../../images/icons8-google.svg";
import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import SignIn from "../SignIn";
import { useState } from "react";


const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTelChange = (e) => {
    setTel(e.target.value);
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
                Sign up to your Account
              </h4>
            </div>
            <div className="card-subtitle text-center">
              <p className="card-subtitle p-4" style={{ fontSize: "12px" }}>
                Keep your financial data stored onour server so that you can
                access it from anywhere you want{" "}
              </p>
              <h6 className="fw-bold">
                Already have an Account?{" "}
                <Link className="text-danger" to="/login">
                  Sign In
                </Link>
              </h6>
              <Routes>
                <Route exact path="/signin" element={<SignIn />}></Route>
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
                    <label htmlFor="exampleInputText1" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control border-0 border-bottom shadow-none"
                      id="exampleInputText1"
                      placeholder="Bianca Grace"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => {
                        handleFullNameChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputNumber1" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control border-0 border-bottom shadow-none"
                      id="exampleInputText1"
                      placeholder="+234000000000"
                      name="tel"
                      value={tel}
                      onChange={(e) => {
                        handleTelChange(e);
                      }}
                    />
                  </div>
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
                    Get Code
                  </button>
                  <p className="text-center mt-3">or</p>

                  <div className="text-center d-flex justify-content-center">
                    <button
                      className="btn-google p-1 w-100 text-dark"
                      style={{ borderRadius: "10px" }}
                    >
                      <span>
                        <a className="text-center" href="/Bio">
                          <img
                            className="me-3"
                            style={{ width: "20px" }}
                            src={Google}
                            alt=""
                          />
                        </a>
                      </span>
                      Sign up with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
    <section className="d-block d-sm-block d-md-none">
      <nav>
        <img src="./Images/Spenditure.svg" alt="" />
        <a style="text-decoration: none" href="#">
          Sign In
        </a>
      </nav>
      <section className="sign-up">
        <img className="signup-img" src="./Images/sign-up.svg" alt="" />

        <div>
          <h1 className="signup-desc">Sign in to your account</h1>

          <form action="" className="form">
            <label for="">Email/Mobile number</label>
            <input
              className="form-control"
              type="text"
              placeholder="name@domain.com"
            />
            <label for="">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="************"
            />
            <div
              style="
              display: flex;
              justify-content: space-between;
              margin-top: 20px;
            "
            >
              <span className="remember">
                Remember me
                <input s type="checkbox" />
              </span>

              <span className="forget">
                <a style="text-decoration: none" href="">
                  Forgot Password?
                </a>
              </span>
            </div>

            <button className="get-btn">Login</button>
            <span style="margin-top: -25px">or</span>
            <button
              className="btn-google"
              style="
              margin-top: 16px;
              width: 100%;
              background-color: white;
              color: black;
            "
            >
              Sign in with google
            </button>

            <img src="./Images/face-id.svg" alt="" />
          </form>
        </div>
      </section>
    </section> */}
    </div>
  );
};

export default SignUp;
