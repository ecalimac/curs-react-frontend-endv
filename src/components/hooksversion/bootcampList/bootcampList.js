import React from "react";
import "./bootcampList.css";

const BootcampList = (props) => {
  return (
    <section className="bootcamps-list">
      <h1>Bootcamps Loaded</h1>
      <ul>
        {props.bootcamps.map((bootcamp) => (
          <li
            key={bootcamp.id}
            onClick={props.onRemoveBootcamp.bind(this, bootcamp.id)}
          >
            <span>{bootcamp.name}</span>
            <span>{bootcamp.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BootcampList;
