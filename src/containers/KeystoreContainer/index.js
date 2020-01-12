import React from "react";
import { compose } from "redux";

import tmuiDuck from "../../store/tmui";
import keystoreDuck from "../../store/keystore";

import KeystoreContainer from "./KeystoreContainer";

const container = compose(tmuiDuck.container, keystoreDuck.container);

export default container(props => <KeystoreContainer {...props} />);
