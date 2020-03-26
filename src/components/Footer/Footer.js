/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          {/* <List className={classes.list}> */}
            <ListItem className={classes.left}>
              <a
                className={classes.block}
                target="_blank"
              >
                Copyrights @ 2014 All Rights Reserved by Canvas Inc
                <br />
                Terms of Use / Privacy Policy
              </a>
            </ListItem>
          {/* </List> */}
        </div>
        <div className={classes.right}>
          <ListItem className={classes.right}>
            <a
              href="http://themes.semicolonweb.com/html/canvas/index-app-showcase.html"
              className={classes.block}
              target="_blank"
            >
              <img src="https://img.icons8.com/material/24/000000/facebook-f.png"/>
              <img src="https://img.icons8.com/windows/24/000000/google.png"/>
              <img src="https://img.icons8.com/material/24/000000/instagram.png"/>
              <img src="https://img.icons8.com/material-outlined/24/000000/pinterest.png" />
              <img src="https://img.icons8.com/material/24/000000/google-drive.png"/>
              <br />
              info@canvas.com . +91-11-6541-6369 . CanvasOnSkype
            </a>
          </ListItem>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
