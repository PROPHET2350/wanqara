import { Alert, Slide, Snackbar } from "@mui/material";
import React from "react";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const FlashMessage = (props) => {
  return (
    <Snackbar
      open={props.open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={props.onClose ? props.onClose : null}
      TransitionComponent={TransitionUp}
      key={"TransitionUp"}
      autoHideDuration={1500}
    >
      <Alert
        onClose={props.onClose ? props.onClose : null}
        severity={props.AlertType}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default FlashMessage;
