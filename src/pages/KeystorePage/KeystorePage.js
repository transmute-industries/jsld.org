import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import BasePage from "../BasePage/BasePage";

import WebKeystore from "../../components/WebKeystore/WebKeystore";

import history from "../../store/history";

const hasUnlockedKeystore = props => {
  return (
    props.keystore.keystore && typeof props.keystore.keystore.data === "object"
  );
};

const CallToAction = props => {
  if (hasUnlockedKeystore(props)) {
    return (
      <Button
        style={{ float: "right" }}
        variant={"contained"}
        color={"primary"}
        onClick={() => {
          history.push("/documents");
        }}
      >
        Explore
      </Button>
    );
  }
  return "";
};
const ExplainerText = props => {
  if (!hasUnlockedKeystore(props)) {
    return (
      <Typography paragraph>
        Before proceeding, please ensure you an unlocked keystore. The icon
        should be red and unlocked to indicate that private keys are available.
      </Typography>
    );
  }
  if (hasUnlockedKeystore(props)) {
    return (
      <Typography paragraph>
        You have an unlocked keystore and are ready to explore.
      </Typography>
    );
  }
};

const KeystorePage = props => (
  <BasePage {...props}>
    <Typography variant="h4" gutterBottom>
      Keystore
      <CallToAction {...props} />
    </Typography>
    <br />
    <ExplainerText {...props} />
    <br />
    <WebKeystore {...props} />
    <br />
  </BasePage>
);

KeystorePage.propTypes = {
  keystore: PropTypes.any,
  doCreateWalletKeystore: PropTypes.any,
  doUpdateKeystore: PropTypes.any,
  doDeleteKeystore: PropTypes.any,
  doToggleKeystore: PropTypes.any
};

export default KeystorePage;
