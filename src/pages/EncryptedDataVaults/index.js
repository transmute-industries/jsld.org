import React from "react";
import { compose } from "redux";

import tmui from "../../store/tmui";
import keystore from "../../store/keystore";

import EncryptedDataVaults from "./EncryptedDataVaults";

const container = compose(tmui.container, keystore.container);

export default container(props => {
  return <EncryptedDataVaults {...props} />;
});
