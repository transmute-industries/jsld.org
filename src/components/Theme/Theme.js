import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { pink, deepPurple, teal } from "@material-ui/core/colors";
import { darken, lighten } from "@material-ui/core/styles/colorManipulator";

const config = {
  splashImage: "https://source.unsplash.com/random",
  primaryColor: deepPurple[800],
  secondaryColor: teal[500]
};

const theme = createMuiTheme({
  splashImage: config.splashImage,
  palette: {
    primary: {
      light: lighten(config.primaryColor, 0.07),
      main: config.primaryColor,
      dark: darken(config.primaryColor, 0.5)
    },
    secondary: {
      light: lighten(config.secondaryColor, 0.07),
      main: config.secondaryColor,
      dark: darken(config.secondaryColor, 0.5)
    },
    alert: {
      light: lighten(pink.A400, 0.07),
      main: pink.A400,
      dark: darken(pink.A400, 0.5)
    }
  }
});

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
