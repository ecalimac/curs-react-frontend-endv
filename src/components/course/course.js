import React, { Component } from "react";
import "./course.css";
import { Link } from "react-router-dom";

class CourseComponent extends Component {
  // constructor() {
  //     super();
  // }
  render() {
    const {
      bootcamp: { name, description, id },
    } = this.props;
    return (
      <div className="card-container2">
        <p>{name}</p>
        <p>{description}</p>
        <Link to={`/course/${id}`}>See details</Link>
      </div>
    );
  }
}

export default CourseComponent;
