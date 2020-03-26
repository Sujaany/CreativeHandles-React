import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import img1 from "../../../assets/img/images/s1.png";
import img2 from "../../../assets/img/images/s4.png";
import img3 from "../../../assets/img/images/s5.png";

const useStyles = makeStyles(styles);

export default function ResponsiveLayoutSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={img1} alt="..." />
              </GridItem>
              <h4 className={classes.cardTitle}>Responsive Layout</h4>
              <CardBody>
                <p className={classes.description}>
                  Powerful Layout with Responsive functionality that can be
                  adapted to any screen size. Resize browser to view.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={img2} alt="..." />
              </GridItem>
              <h4 className={classes.cardTitle}>Retina Ready Graphics</h4>
              <CardBody>
                <p className={classes.description}>
                  Looks beautiful & ultra-sharp on Retina Screen Displays.
                  Retina Icons, Fonts & all others graphics are optimized.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={img3} alt="..." />
              </GridItem>
              <h4 className={classes.cardTitle}>Powerful Performance</h4>
              <CardBody>
                <p className={classes.description}>
                  Canvas includes tons of optimized code that are completely
                  customizable and deliver unmatched fast performance.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
