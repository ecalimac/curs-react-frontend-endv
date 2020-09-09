import React, { Component } from "react";
import BootcampComponent from "../bootcamp/bootcamp";
import SearchBarCompoent from "../searchBar/searchBar";
import "./bootcampsList.css";
import axios from "axios";
import Spinner from "../spinnerComponent/spinner";

class BootcampListComponent extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      isLoading: false,
      //bootcamps: [] -> (magically)it's working with an empty array
      bootcamps: [{ id: 1, name: "" }],
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://www.endava-bootcamp.com/api/v1/bootcamps/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        // console.log(response, "raspuns");
        this.setState({ bootcamps: response.data.data, isLoading: false });
      });
  }
  // removeBootcamp = (bootcampID) => {
  //   this.setState((currentState) => ({
  //     bootcamps: currentState.bootcamps.filter(
  //       (eachBootcamp) => eachBootcamp.id !== bootcampID
  //     ),
  //   }));
  // };
  render() {
    const { bootcamps, searchField, isLoading } = this.state;
    const filteredBootcamps = bootcamps
      .filter((bootcamp) =>
        bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
      .sort((a, b) => b.date - a.date);
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="container">
        <SearchBarCompoent
          placeholder="Search bootcamps"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBarCompoent>
        <div className="card-list">
          {filteredBootcamps.map((bootcamp) => (
            <BootcampComponent
              key={bootcamp.id}
              bootcamp={bootcamp}
              // onRemoveBootcamp={this.removeBootcamp}
            ></BootcampComponent>
          ))}
        </div>
      </div>
    );
  }
}

export default BootcampListComponent;
