import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/images/bg.png";
import thumbnail from "../assets/images/thumbnail.png";
import "./Home.css";
import card1 from "../assets/images/car-logo1.png";
import card2 from "../assets/images/card-logo2.png";
import card3 from "../assets/images/card-logo3.png";
import card4 from "../assets/images/card-logo4.png";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        <img src={bg} className="img-fluid" alt="" />
        <h4 id="scrollspyHeading1" className="sc p-4">
          <h1 className="container d-flex justify-content-start pt-4 pb-4">
            <b>Aligned with the United Nations Vision for A Better Planet</b>
          </h1>
          <div className="card bg-light mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={thumbnail}
                  className="img-fluid imag_s rounded-start"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text para">
                    Summer, Naturally! is more than just your average summer
                    program. Theteam behind this has carefully thought through
                    each aspect of how it impacts the students. We take pride in
                    adding that the program is in alignment with one of the 17
                    UN Sustainable Development Goals(SDGs)-SDG12-whichspeaks of
                    Sustainable Consumption and Production Patterns. This
                    hands-onprogram is intended to bring students very close to
                    the experiences involved in truly living SDG12.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </h4>
        <h1 className="container d-flex justify-content-start pt-4 pb-4">
          <b>How Summer, Naturally! Works </b>
        </h1>
        <section>
          <div className="containers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
          <div className="containers">
            <div className="cards">
              <div className="content">
                <div className="imgBx">
                  <img src={card1} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    <br />
                    <span></span>
                  </h3>
                </div>
              </div>
              <h3 className="sci"></h3>
            </div>
            <div className="cards">
              <div className="content">
                <div className="imgBx">
                  <img src={card2} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Get investigative and curious. Do your research and find out
                    what went into its making
                    <br />
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li></li>
              </ul>
            </div>
            <div className="cards">
              <div className="content">
                <div className="imgBx">
                  <img src={card3} alt="" />
                </div>
                <div className="contentBx">
                  <h3></h3>
                </div>
              </div>
              <ul className="sci">
                <li></li>
              </ul>
            </div>
            <div className="cards">
              <div className="content">
                <div className="imgBx">
                  <img src={card4} alt="" />
                </div>
                <div className="contentBx">
                  <h3></h3>
                </div>
              </div>
              <ul className="sci">
                <li></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-light pb-4">
            <Section3 />
          </div>
        </section>

        <section>
          <div className="p-4">
            <Section4 />
          </div>
        </section>
      </div>
    </div>
  );
}
