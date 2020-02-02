import React from "react";

import { storiesOf } from "@storybook/react";

import LinkedDataProofs from "./index";
import withReduxDecorator from "../../__storybook__/withReduxDecorator";

storiesOf("Pages", module)
  .addDecorator(withReduxDecorator)
  .add("Linked Data Proofs", () => <LinkedDataProofs />);
