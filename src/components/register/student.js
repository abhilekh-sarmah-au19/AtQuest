import React, { useState } from "react";
import "./student.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Student = () => {
  const history = useHistory();
  const [students, setStudent] = useState({
    sname: "",
    email: "",
    mobile: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...students,
      [name]: value,
    });
  };

  const student = () => {
    const { sname, email, mobile, name } = students;
    if (sname && email && mobile && name) {
      axios.post("http://localhost:8080/student", students).then((res) => {
        alert(res.data.message);
        history.push("/");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="container1">
      <div className="student mt-5 row">
        <h2>REGISTER NOW</h2>
        <br />
        <label className="col-3 mt-3">School Name</label>
        <input
          type="text"
          name="sname"
          className="col-md-8"
          value={students.sname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label className="col-3 mt-3">Contact Person</label>
        <input
          type="text"
          className="col-md-8"
          name="name"
          value={students.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label className="col-3 mt-3">Email</label>
        <input
          className="col-md-8"
          type="email"
          name="email"
          value={students.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label className="col-3 mt-3">Phone</label>
        <input
          className="col-md-8"
          type="tel"
          name="mobile"
          pattern="[6789][0-9]{9}"
          value={students.mobile}
          onChange={handleChange}
        />
        <br />
        <br />

        <div className="button mt-4" onClick={student}>
          SUBMIT
        </div>
      </div>
    </div>
  );
};

export default Student;
