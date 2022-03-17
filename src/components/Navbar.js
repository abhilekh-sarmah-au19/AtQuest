import React from "react";
import logo from "../assets/images/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="360"
              height="124"
              class="d-inline-block img-fluid img-fluids align-text-top"
            />
          </a>
          <div className="popup">
            <button
              type="button"
              class="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <MenuIcon />
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-center">
                    <a class="nav-link active mod" aria-current="page" href="/">
                      Home
                    </a>

                    <a class="nav-link mod" href="/">
                      Services
                    </a>

                    <a class="nav-link mod" href="/">
                      Experiences
                    </a>

                    <a class="nav-link mod" href="/">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>

            <a class="nav-link" href="#">
              Services
            </a>

            <a class="nav-link" href="#">
              Experiences
            </a>

            <a class="nav-link">Contact Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
