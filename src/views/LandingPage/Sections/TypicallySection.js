import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import iphoneSolid from "../../../assets/img/images/iphone-solid.png";
import CardFooter from "../../../components/Card/CardFooter.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function TypicallySection() {
  const classes = useStyles();

  return (
    <div className={classes.section} style={{
      backgroundColor: '#E5E4E2',
      width: '1260px',
      // height: '600px'
    }}>
      <div>
        <GridContainer >
          <GridItem xs={12} sm={12} md={6}>
            <Card plain> 
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={iphoneSolid} alt="..." />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h2>
                <b>TYPICALLY RESPONSIVE</b>
              </h2>
              <h2>Our App scales beautifully to different Devices.</h2>
                           
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet cumque, <br/>perferendis accusamus porro illo
                  exercitationem molestias, inventore obcaecati ut omnis
                  voluptatibus ratione odio amet magnam quidem tempore
                  necessitatibus quaerat, voluptates excepturi voluptatem,
                  veritatis qui temporibus.
                </p>
              
              <CardFooter>
                <Button style={{backgroundColor:"white",
                size:"lg"}} >View Gallary</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div> 
  );
}
