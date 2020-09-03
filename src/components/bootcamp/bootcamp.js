import React from "react";
import "./bootcamp.css";

const BootcampComponent = (props) => {
  const {
    bootcamp: { name, description, id },
  } = props;
  const onRemoveBootcamp = props.onRemoveBootcamp;
  return (
    <div className="card-container">
      <p>{name}</p>
      <p>{description}</p>
      <button onClick={() => onRemoveBootcamp(id)}>Delete</button>
    </div>
  );
};

export default BootcampComponent;
