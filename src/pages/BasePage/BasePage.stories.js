import React from "react";

import { storiesOf } from "@storybook/react";
import withReduxDecorator from "../../__storybook__/withReduxDecorator";
import TabsWithContent from "../../__storybook__/TabsWithContent";
import Content from "../../__storybook__/Content";

import BasePage from "./BasePage";

storiesOf("Pages / Base", module)
  .addDecorator(withReduxDecorator)
  .add("Without Tabs", () => (
    <BasePage tmui={{}}>
      <Content />
    </BasePage>
  ))
  .add("With Tabs", () => (
    <BasePage tmui={{}}>
      <TabsWithContent />
    </BasePage>
  ));
