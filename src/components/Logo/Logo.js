import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import transmuteLogo from "./logo.svg";
import transmuteIdLogo from "./transmute-id-logo.svg";

const withLogoStyles = withStyles(() => ({
  logo: {
    width: "50vw",
    maxWidth: "300px",
    marginTop: "2em",
    marginBottom: "-2em",
    display: "inline-block"
  }
}));

const Logo = ({ classes, main }) => (
  <img
    src={main ? transmuteLogo : transmuteIdLogo}
    className={classes.logo}
    alt="Transmute Logo"
  />
);

Logo.propTypes = {
  classes: PropTypes.object,
  main: PropTypes.bool
};

export default withLogoStyles(Logo);
