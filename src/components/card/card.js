import React, { Component } from "react";
import "./card.css";
import { Link } from "react-router-dom";

class CardComponent extends Component {
  // constructor() {
  //     super();
  // }
  render() {
    const {
      item: { name, description, id },
      category,
    } = this.props;
    return (
      <div className="card-container2">
        <p>{name}</p>
        <p>{description}</p>
        <Link to={`/${category}/${id}`}>See details</Link>
      </div>
    );
  }
}

export default CardComponent;
