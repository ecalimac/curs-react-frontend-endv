import React, { Component, Fragment } from "react";
import "./App.css";
// import BootcampListComponent from './components/bootcampsList/bootcampsList';
// import Parent from './components/siblings-interaction/parent';
// import ChildComponent from "./childComponent";
import { Route, Switch } from "react-router-dom";
// import CoursesList from "./components/coursesList/coursesList";
import CourseComponent from "./components/course/course";
import Navigation from "./components/navigation/navigation";
import BootcampListComponentHooks from "./components/bootcampsList/hooks-version/bootcampsListHooks";
import BootcampComponent from "./components/bootcamp/bootcamp";
import CoursesListComponentHooks from "./components/coursesList/hooks-version/coursesListHooks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello",
      showChild: true,
    };
  }
  render() {
    console.log("render Parent");
    return (
      <Fragment>
        {/* <button onClick={() => this.setState(state => ({showChild : !state.showChild}))}>
                    Toggle state
                </button>

                <button onClick={() => this.setState(state => ({text: state.text + '+hello'}))}>
                    Update state
                </button>
                {this.state.showChild ? <ChildComponent text={this.state.text} /> : null} */}

        <Navigation />
        <Switch>
          <Route exact path="/" component={BootcampListComponentHooks}></Route>
          <Route
            exact
            path="/courses"
            component={CoursesListComponentHooks}
          ></Route>
          <Route exact path="/courses/:id" component={CourseComponent} />
          <Route
            exact
            path="/bootcamps/:id"
            component={BootcampComponent}
          ></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
