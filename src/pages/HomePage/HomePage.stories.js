import React from "react";

import { storiesOf } from "@storybook/react";

import HomePage from "./index";
import withReduxDecorator from "../../__storybook__/withReduxDecorator";

storiesOf("Pages", module)
  .addDecorator(withReduxDecorator)
  .add("Home", () => <HomePage />);
