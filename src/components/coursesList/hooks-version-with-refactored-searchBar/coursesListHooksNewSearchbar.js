import React, { useState } from "react";
import SearchBar2Component from "../../searchBar/searchBar2/searchBar2";
import "./coursesListHooksNewSearchbar.css";

const CoursesListComponentHooksNewSearchBar = () => {
  // Daca am mutat searchField in componenta SearchBar,
  // nu prea isi mai are rostul sa tinem courses in state(cu useState)
  // Daca vom lua cursurile async va trebui sa transformam aceasta componenta intr-o class component
  // Sau, putem folosi CompoenentDidMount intr-o functional component?

  const [componentState, setComponentState] = useState({
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

  const { courses } = componentState;

  return (
    <div className="container">
      <SearchBar2Component
        placeholder="Search courses..."
        dataToFilter={courses}
      ></SearchBar2Component>
    </div>
  );
};

export default CoursesListComponentHooksNewSearchBar;
