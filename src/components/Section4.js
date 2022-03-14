import React from "react";
import "./Section4.css";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Student from "../components/register/student";
export default function Section4() {
  return (
    <div className="section4">
      <h1 className="container d-flex justify-content-start">Who does what?</h1>
      <div className="row d-flex rows justify-content-center">
        <div className="flip-card column col-md-6" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card imgs">
                <img src={bg1} className="card-img-top" alt="..." />
                <div className="card-body cb">
                  <h4 className="d-flex h4 jsutify-content-start fw-bolder">
                    STUDENTS
                  </h4>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <h3></h3>
            </div>
          </div>
        </div>
        <div className="flip-card column col-md-6" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3 className="text-dark"></h3>
            </div>
            <div className="flip-card-back bg1">
              <h3 className="text">
                Bring students onboard
                <br /> Assimilate student project
                <br /> pictures and share
              </h3>
            </div>
          </div>
        </div>
        <div className="flip-card column col-md-6" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card imgs">
                <img src={bg2} className="card-img-top" alt="..." />
                <div className="card-body cb">
                  <h4 className="d-flex h4 jsutify-content-start fw-bolder">
                    SUMMER NATURALLY TEAM
                  </h4>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <h3></h3>
            </div>
          </div>
        </div>
        <div className="flip-card column col-md-6" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card imgs">
                <img src={bg3} className="card-img-top" alt="..." />
                <div className="card-body cb">
                  <h4 className="d-flex h4 jsutify-content-start fw-bolder">
                    PARENTS
                  </h4>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Student />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
