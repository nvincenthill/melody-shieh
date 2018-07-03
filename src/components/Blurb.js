import React from "react";
// import RestartingTypist from "./RestartingTypist";
import { Fade } from "react-reveal";

class Blurb extends React.Component {
  state = {};

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Fade>
          <div className="about-headshot-container">
            <img
              className="about-headshot"
              alt="did not load"
              src="../images/headshot.png"
            />

            <div className="about-blurb">
              <p className="about-blurb-text">
                "Melody was always inquisitive, gave great recommendations, and
                exhibited wisdom way beyond her years. I would hire her again in
                a nanosecond!"
              </p>
              <p className="about-blurb-text-footer"> Vincent K., Dang Foods CEO </p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Blurb;
