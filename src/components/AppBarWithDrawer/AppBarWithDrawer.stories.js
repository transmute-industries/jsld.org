import React from "react";

import { storiesOf } from "@storybook/react";

import AppBarWithDrawer from "./AppBarWithDrawer";
import DrawerContent from "./DrawerContent";

import logo from "../Logo/logo.svg";

storiesOf("Components / App Bar With Drawer", module)
  .add("With Text Header", () => (
    <AppBarWithDrawer headerText={"App Title"} drawer={<DrawerContent />} />
  ))
  .add("With Image Header", () => (
    <AppBarWithDrawer headerImage={logo} drawer={<DrawerContent />} />
  ));
