import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Bootcamp List</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/bootcamps/add">Add bootcamp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
