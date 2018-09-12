import React from "react";
import "babel-polyfill";
import Header from "./Header";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import NavCard from "./NavCard";

class AboutMe extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="About Me" icon="md-person" />
        <NavCard handleRoute={this.handleRoute} />
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
              Melody is a master of execution and has a proven track record of
              providing strategic and actionable insights that help companies
              grow, scale, and deliver. She specializes in business analytics
              and synthesizes data-driven findings into recommendations for
              senior executives to drive positive impact and achieve sustainable
              results.
            </p>
            <p className="about-description-text">
              As a Consultant at Alvarez & Marsal, she advised clients through
              corporate strategy on customer experience, organizational
              leadership, incentive compensation strategy, process improvement,
              and corporate transformation.
            </p>
            <p className="about-description-text">
              With a passion for collaboration, focus on data-driven
              objectivity, and aptitude for problem-solving, she loves the
              challenge of applying structure to the chaos of business growth
              and is always looking for new opportunities to learn, develop and
              most importantly, contribute.
            </p>
            <p className="about-description-text">
              Melody earned a B.S. in Business Administration from the
              University of California, Berkeley and currently resides in the
              Rockridge district of Oakland, California where she enjoys urban
              gardening and cooking with her boyfriend (recipes can be found{" "}
              <a href="https://mealpanda.herokuapp.com/" target="_blank">
                {" "}
                here
              </a>
              ).
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

                <p className="about-contact"> Contact Melody! </p>
              </Link>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default AboutMe;
