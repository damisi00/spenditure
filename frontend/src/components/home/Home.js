import React from "react";
import RightNav from "../home/RightNav";
import LeftNav from "../home/LeftNav";
import Main from "../home/Main"
const Home = () => {
  return (
    <main>
      <section className="">
        <div className="row">
          
          <div className="left-sidebar col-lg-3 col-md-2 d-none d-md-none d-lg-block">
            <LeftNav />
          </div>

          <div id="main" className="col-md-8 ">
            <Main />
          </div>

          <div className="right-sidebar col-md-1 d-none d-md-none d-lg-block">
            <RightNav />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
