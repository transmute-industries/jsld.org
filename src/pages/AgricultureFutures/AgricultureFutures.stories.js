import React from "react";

import { storiesOf } from "@storybook/react";

import AgricultureFutures from "./index";
import withReduxDecorator from "../../__storybook__/withReduxDecorator";

storiesOf("Pages", module)
  .addDecorator(withReduxDecorator)
  .add("Home", () => <AgricultureFutures />);
