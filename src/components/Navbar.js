import React from "react";
import logo from "../assets/images/logo.jpg";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-light px-3 container">
        <img src={logo} alt="" width="280" height="90" className="navbrand" />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link text-dark fw-bolder" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bolder" href="/services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bolder" href="/experiences">
              Experiences
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark fw-bolder" href="/contactus">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
