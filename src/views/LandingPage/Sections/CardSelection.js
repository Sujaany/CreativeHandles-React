import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import ImageShoe from "assets/img/images/shoe.jpg";
import ImageBoy from "assets/img/images/boy.jpg";
import ImageGirl from "assets/img/images/girl.jpg";

const useStyles = makeStyles(styles);

export default function CardSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>EVEN MORE FEATURE RICH</h2>
      <h4 className={classes.description}>
        Philanthropy convert livelihoods, initive end hunger gender rights
        local. <br /> John Lennon storytelling; advocate, altruism impact
        catalyst.
      </h4>{" "}
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card carousel>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ImageShoe} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>GENETICKA ANALYZA</h4>
              <CardBody>
                <p className={classes.description}>
                  Looks beautiful & ultra-sharp on <br />
                  Retina Screen Displays. Retina <br />
                  Icons. Fonts & all others graphics <br />
                  are optimized
                </p>
                <br />
                <Button>Zjistit vice</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card carousel>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ImageBoy} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>NUTRAFITNESS DNA</h4>
              <CardBody>
                <p className={classes.description}>
                  Looks beautiful & ultra-sharp on <br />
                  Retina Screen Displays. Retina <br />
                  Icons. Fonts & all others graphics <br />
                  are optimized
                </p>
                <br />
                <Button>Zjistit vice</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card carousel>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ImageGirl} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>MAXIMUM PERFORMANCE</h4>
              <CardBody>
                <p className={classes.description}>
                  Looks beautiful & ultra-sharp on <br />
                  Retina Screen Displays. Retina <br />
                  Icons. Fonts & all others graphics <br />
                  are optimized
                </p>
                <br />
                <Button>Zjistit vice</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
