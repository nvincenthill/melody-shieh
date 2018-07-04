import React from "react";
import { Fade } from "react-reveal";
// import Ionicon from "react-ionicons";
import WorkSample from "./WorkSample";
// import HomeButton from "./HomeButton";
import Header from "./Header";

class Projects extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(route);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="Work Samples" icon="ios-folder" />

        <div className="project-array-container">
          <Fade>
            <WorkSample />
          </Fade>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
