import React from "react";

import { storiesOf } from "@storybook/react";

import withReduxDecorator from "../../__storybook__/withReduxDecorator";

import KeystoreContainer from "./index";

storiesOf("Containers", module)
  .addDecorator(withReduxDecorator)
  .add("Keystore", () => <KeystoreContainer />);
