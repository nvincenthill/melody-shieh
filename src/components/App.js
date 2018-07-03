import React from "react";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Header from "./Header";

import { Fade } from "react-reveal";
import "babel-polyfill";

class App extends React.Component {
  state = {
    adjective: 0,
    verb: 0
  };

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="Melody Shieh" icon="ios-contact" buttonsHidden="true" />
        <NavCard handleRoute={this.handleRoute} />
        <Fade>
          <div>
            <h2 className="about-tagline">
              I'm a consultant <br /> creating value for my clients
            </h2>
          </div>
        </Fade>
        <Blurb />
        <Fade>
          <div>
            <h2 className="about-tagline-mobile">
              I'm a consultant <br /> creating value for my clients
            </h2>
          </div>
        </Fade>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
