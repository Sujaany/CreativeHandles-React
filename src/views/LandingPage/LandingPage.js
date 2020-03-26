import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import IconSection from "./Sections/IconSection.js";
import CardSection from "./Sections/CardSelection.js";
import ResponsiveLayoutSection from "./Sections/ResponsiveLayoutSection";
import TypicallySection from "./Sections/TypicallySection";
import AwesomeSection from "./Sections/AwesomeSection.js";

import sliderIphone from "../../assets/img/images/slider-iphone.png";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        filter
        image={require("../../assets/img/images/landing-bg.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={sliderIphone} alt="..." width="300px" height="400px" />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>The new way to create</h1>
              <br />
              <h1 className={classes.title}>awesome website. Try </h1>
              <br />
              <h1 className={classes.title}>
                {" "}
                Using <b>Canvas</b> template{" "}
              </h1>
              <br />
              <Button color="#E8E8E8" size="lg" target="_blank">
                <img src="https://img.icons8.com/material-outlined/24/000000/bitten-apple--v2.png" />
                {""}
                START YOUR FREE TRIAL
                <br />
                30 Days & No Credit Card Required
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ResponsiveLayoutSection />
          <AwesomeSection />
          <IconSection />
          <TypicallySection />
          <CardSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
