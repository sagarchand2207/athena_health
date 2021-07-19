import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WhoWe = () => {
  return (
    <main className="who__we__main">
      <Header />
      <div className="who__we__container">
        <div className="contents">
          <div className="info__container">
            <div>
              <h4 className="title_header">We are athenahealth</h4>
            </div>
            <div className="divider"></div>
            <div className="sub__title">
              <p>Healthcare as it could be</p>
            </div>
            <div className="desc">
              <p>
                athenahealth partners with healthcare organizations across the
                care continuum to drive clinical and financial results. Our
                expert teams build modern technology on an open, connected
                ecosystem, yielding insights that make a difference for our
                customers and their patients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default WhoWe;
