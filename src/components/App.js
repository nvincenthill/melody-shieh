import React from "react";
import GithubCorner from "react-github-corner";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Header from "./Header";

import { Fade } from "react-reveal";
import "babel-polyfill";

// import { Button, Carousel } from "react-bootstrap";
// import Header from "./Header";
// import ImageCarousel from "./ImageCarousel";
// import { Collapse } from "react-collapse";
// import { Grid, Row, Col } from "react-flexbox-grid";

class App extends React.Component {
  state = {
    adjective: 0,
    verb: 0,
  };

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  changeVerb = () => {
    this.setState({ verb: this.state.verb + 1 });
  };

  changeAdjective = () => {
    this.setState({ adjective: this.state.adjective + 1 });
  };

  componentDidMount() {
    this.verbInterval = setInterval(() => this.changeVerb(), 1500);
    this.adjectiveInterval =  setInterval(() => this.changeAdjective(), 2000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.verbInterval);
    clearInterval(this.adjectiveInterval);
  }

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
