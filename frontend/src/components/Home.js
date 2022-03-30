import React from "react";
import RightNav from "./RightNav";
import Main from "./Main";
import LeftNav from "./LeftNav";
import "./main.css";
const Home = () => {
  return (
    <main>
      <section className="container-fluid">
        <div className="home row">
          
          <div className="left-sidebar col-sm-2 container d-none d-md-block">
            <LeftNav />
          </div>

          <div id="main" className="container col-sm-8 pb-4">
            <Main />
          </div>

          <div className="right-sidebar col-sm-2 container-fluid d-none d-md-block">
            <RightNav />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
