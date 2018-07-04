import React from "react";
import "babel-polyfill";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
// import HomeButton from "./HomeButton";
// import Footer from "./Footer";
import Header from "./Header";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class AboutMe extends React.Component {
  state = {};
  changeColor = () => {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="About Me" icon="md-person" />
        <div className="about-me">
          <div className="about-me-headshot-container">
            <img
              className="about-me-headshot"
              alt="did not load"
              src="../images/aboutmephoto.jpg"
            />
          </div>
          <div className="about-description">
            <p className="about-description-text">
              Melody Shieh is a Consultant at Alvarez & Marsal in San Francisco.
              She has experience supporting clients with organizational
              transformation and specializes in business analytics.
            </p>{" "}
            <p className="about-description-text">
              Most recently at A&M, Melody assisted a leading national
              healthcare provider complete an objective discovery assessment for
              their outpatient care scheduling function and provided
              recommendations for a future, consolidated contact center
              location. Her analysis consisted of building a staffing and
              variable cost model and synthesizing stakeholder feedback into
              deliverables that equipped the client to make strategic decisions.
            </p>
            <p className="about-description-text">
              Melody also assisted the client with the development of an
              incentive compensation plan for their one thousand contact center
              agents by identifying key performance metrics that would drive
              desired behaviors and produce the right customer experience.
              Previously, Melody assisted a $60B national healthcare provider.
            </p>
            <div className="about-contact">
              <Link to="/Contact/">
                <Ionicon
                  icon="ios-contact"
                  color="#222831"
                  fontSize="5em"
                  beat={false}
                  className="about-contact-button"
                />

                <p className="about-contact"> Hire Melody! </p>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutMe;
