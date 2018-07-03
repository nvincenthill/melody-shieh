import React from "react";
import { Fade } from "react-reveal";
// import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
// import GithubCorner from "react-github-corner";
import MediaQuery from "react-responsive";

class WorkSample extends React.Component {
  state = {
    isHovered: false
  };

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <Fade>
        <div className="project">
          <a href={this.props.url}>
            <img
              className="project_image"
              src={this.props.imageSource}
              alt="Did not load"
            />
            <h2 className="project_title"> {this.props.name} </h2>
          </a>
          <h3 className="project_description">{this.props.description}</h3>
        </div>
      </Fade>
    );
  }
}

export default WorkSample;
