import React from "react";

import { storiesOf } from "@storybook/react";
import Button from "@material-ui/core/Button";
import withReduxDecorator from "../../__storybook__/withReduxDecorator";
import Snackbar from "./Snackbar";
import MySnackbarContentWrapper from "./MySnackbarContentWrapper";

import duck from "../../store/tmui";

const Container = duck.container(props => (
  <div>
    <Button
      variant={"contained"}
      onClick={() => {
        props.doSetTmuiProp({
          snackBarMessage: {
            open: true,
            variant: "success",
            message: "Changes saved.",
            vertical: "bottom",
            horizontal: "right",
            autoHideDuration: 2000
          }
        });
      }}
    >
      Success Bottom Right
    </Button>
    <br />
    <br />
    <Button
      variant={"contained"}
      onClick={() => {
        props.doSetTmuiProp({
          snackBarMessage: {
            open: true,
            variant: "error",
            message: "Something went wrong!",
            vertical: "top",
            horizontal: "right",
            autoHideDuration: 2000
          }
        });
      }}
    >
      Error Top Right
    </Button>
    <br />
    <br />
    <Button
      variant={"contained"}
      onClick={() => {
        props.doSetTmuiProp({
          snackBarMessage: {
            open: true,
            variant: "default",
            message: "Ledger update succeeded.",
            vertical: "bottom",
            horizontal: "left",
            autoHideDuration: 2000
          }
        });
      }}
    >
      Default Bottom Left
    </Button>
    <Snackbar {...props} />
  </div>
));

storiesOf("Components / Snackbar", module)
  .addDecorator(withReduxDecorator)
  .add("Examples", () => (
    <div>
      <MySnackbarContentWrapper
        variant="error"
        style={{ margin: "10px" }}
        message="This is an error message!"
      />
      <MySnackbarContentWrapper
        variant="warning"
        style={{ margin: "10px" }}
        message="This is a warning message!"
      />
      <MySnackbarContentWrapper
        variant="info"
        style={{ margin: "10px" }}
        message="This is an information message!"
      />
      <MySnackbarContentWrapper
        variant="success"
        style={{ margin: "10px" }}
        message="This is a success message!"
      />
    </div>
  ))
  .add("With Redux", () => <Container />);
