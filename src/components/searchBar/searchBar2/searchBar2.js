import React, { useState, useEffect, Fragment } from "react";
import CardComponent from "../../card/card";
import "./searchBar2.css";

const SearchBar2Component = ({ placeholder, dataToFilter }) => {
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    console.log(searchField, "searchField state");
  });

  const updateSearchField = (e) => {
    setSearchField(e.target.value);
  };
  const filteredData = dataToFilter.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );
  return (
    <Fragment>
      <div className="search">
        <input
          type="search"
          placeholder={placeholder}
          onChange={updateSearchField}
        />
      </div>
      <div className="card-list">
        {filteredData.map((item) => (
          <CardComponent
            key={item.id}
            item={item}
            category={"courses"}
          ></CardComponent>
        ))}
      </div>
    </Fragment>
  );
};

export default SearchBar2Component;
