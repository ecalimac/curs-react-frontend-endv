import React from "react";
import "./course.css";
import { Link } from "react-router-dom";

// class CourseComponent extends Component {
//   // constructor() {
//   //     super();
//   // }
//   render() {
//     const {
//       course: { name, description, id },
//     } = this.props;

//     return (
//       <div className="card-container2">
//         <p>{name}</p>
//         <p>{description}</p>
//         <Link to={`/courses/${id}`}>See details</Link>
//       </div>
//     );
//   }
// }

const CourseComponent = (props) => {
  const {
    course: { name, description, id },
  } = props;
  return (
    <div className="card-container">
      <p>{name}</p>
      <p>{description}</p>
      <Link to={`/courses/${id}`}>See details</Link>
    </div>
  );
};

export default CourseComponent;
