import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import ipadSection from "../../../assets/img/images/ipad-section.png";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function TypicallySection() {
  const classes = useStyles();

  return (
    <div
      className={classes.section}
      style={{
        backgroundColor: "#E5E4E2",
        width: "1260px",
        height: "600px"
      }}
    >
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem>
            <Card plain>
              <h2>
                <b>AWESOME SCALABLE APP</b>
              </h2>
              <h2>Our App scales beautifully to different Devices.</h2>

              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Dolorem maiores pariatur voluptatem placeat laborum <br /> iste 
                accusamus nam unde, iure id.
              </p>
              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                Eveniet cumque, perferendis accusamus porro illo <br /> exercitationem 
                molestias,inventore obcaecati ut omnis <br />voluptatibus ratione odio
                amet magnam quidem tempore necessitatibus quaerat, voluptates 
                excepturi voluptatem, <br/> veritatis qui temporibus.
              </p>
              
            </Card>
            <Button style={{ backgroundColor: "white", size: "sm" }}>
              START TRIAL
            </Button>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ipadSection} alt="..." width="600px" height="400px" />
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
