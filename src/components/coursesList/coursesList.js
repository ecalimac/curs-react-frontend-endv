import React, { Component } from "react";
import CourseComponent from "../course/course";
import SearchBarCompoent from "../searchBar/searchBar";
import "./coursesList.css";

class CoursesList extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        {
          id: 1,
          name: "React",
          description:
            " is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
        },
        {
          id: 2,
          name: "Vue",
          description:
            "is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications",
        },
        {
          id: 3,
          name: "Angular",
          description:
            " is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
        },
      ],
      searchField: "",
    };
  }

  render() {
    const { courses, searchField } = this.state;
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="container">
        <SearchBarCompoent
          placeholder="Search bootcamps"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBarCompoent>
        <div className="card-list">
          {filteredCourses.map((course) => (
            <CourseComponent
              key={course.id}
              bootcamp={course}
            ></CourseComponent>
          ))}
        </div>
      </div>
    );
  }
}

export default CoursesList;
