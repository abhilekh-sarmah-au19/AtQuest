import React from "react";
import "./Section.css";

export default function Section3() {
  return (
    <div className="section3">
      <h1 className="container d-flex h2 justify-content-start pt-5">
        <b> Why should your school join in?</b>
      </h1>

      <div className="columns bg-light">
        <ul className="list-group">
          <br />

          <li className="list-group-item bg hv">
            <h2 className="text-start">
              <b>STRUCTURED PROGRAM</b>
            </h2>
            <p className="text-start">
              The structured approach to design this program ensures that your
              student have a truly unique experience this summer
            </p>
          </li>
          <li className="list-group-item bg hv">
            <h2 className="text-start">
              <b>LEARNING AND LIFE SKILLS</b>
            </h2>
            <p className="text-start">
              The program drives students to be explorative and inquisitive.This
              helps them develop skills that will shape them into changemaker.
            </p>
          </li>
          <li className="list-group-item bg hv">
            <h2 className="text-start">
              <b>SHOWCASE IMPACT</b>
            </h2>
            <p className="text-start">
              The true impact of the program will be on the day of the showcase
              when students take pride in their project and learning, and so
              does the school. We have embedded this element in the program.
            </p>
          </li>
          <li className="list-group-item bg hv">
            <h2 className="text-start">
              <b>STUDENT-PARENT-SCHOOL COLLABORATION</b>
            </h2>
            <p className="text-start">
              By making parent a key participant in this program, we ensure that
              there is a spirit of collaboration to help the student take
              his/her green journey
            </p>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
}
