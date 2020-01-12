import React from "react";

import { storiesOf } from "@storybook/react";

import KeystorePage from "./index";

import withReduxDecorator from "../../__storybook__/withReduxDecorator";

storiesOf("Pages", module)
  .addDecorator(withReduxDecorator)
  .add("Keystore", () => <KeystorePage />);
