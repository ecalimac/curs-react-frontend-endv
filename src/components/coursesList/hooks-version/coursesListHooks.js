import React, { useState } from "react";
import SearchBarCompoent from "../../searchBar/searchBar";
import CourseComponent from "../../course/course";
import "./coursesListHooks.css";

const CoursesListComponentHooks = () => {
  const [componentState, setComponentState] = useState({
    searchField: "",
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
  });

  const updateSearchField = (e) => {
    setComponentState({ ...componentState, searchField: e.target.value });
  };

  const { courses, searchField } = componentState;
  const filteredCourses = courses.filter((course) =>
    course.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );
  return (
    <div className="container">
      <SearchBarCompoent
        placeholder="Search courses..."
        handleChange={updateSearchField}
      ></SearchBarCompoent>
      <div className="card-list">
        {filteredCourses.map((course) => (
          <CourseComponent key={course.id} bootcamp={course}></CourseComponent>
        ))}
      </div>
    </div>
  );
};

export default CoursesListComponentHooks;
