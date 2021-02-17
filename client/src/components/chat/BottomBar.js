import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";

import ChatIcon from "@material-ui/icons/Chat";
import "./global.css";
const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    top: "auto",
  },
  chatFooter: {
    backgroundColor: "rgb(240, 240, 240)",
    margin: theme.spacing(1, 0, 0, -2),
    width: "100%",
    zIndex: -1,
  },
  inputContainer: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing(1),
    position: "relative",
  },
  icon: {
    width: theme.spacing(5),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  nameInput: {
    padding: theme.spacing(1, 1, 1, 5),
  },
  chatInput: {
    padding: theme.spacing(1, 1, 1, 5),
  },
}));

export default function BottomBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.chatFooter}>
      <Toolbar>
        <div className={classes.inputContainer}>
          <form onSubmit={props.handleSubmit}>
            <div className={classes.icon}>
              <ChatIcon />
            </div>
            <InputBase
              className="inputPlaceholder"
              onChange={props.handleContent}
              value={props.content}
              placeholder="Type your message..."
              classes={{
                root: classes.inputRoot,
                input: classes.chatInput,
              }}
              inputProps={{ "aria-label": "content" }}
            />
          </form>
        </div>
      </Toolbar>
    </div>
  );
}
