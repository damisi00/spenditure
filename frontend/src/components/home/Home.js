import React from "react";
import RightNav from "../home/RightNav";
import LeftNav from "../home/LeftNav";
import Main from "../home/Main";
const Home = () => {
  return (
    <div className="home-main row">
      <div className="left-sidebar col-lg-3 col-md-2 d-none d-md-none d-lg-block">
        <LeftNav />
      </div>

      <div id="main" className="col-md-8 col-lg-6">
        <Main />
      </div>

      <div className="right-sidebar col-lg-2 col-md-1 d-none d-md-none d-lg-block">
        <RightNav />
      </div>
    </div>
  );
};

export default Home;
