import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    background: "white",
  },
  title: {
    flexGrow: 1,
    background: "white",
  }, 
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button color="inherit">
            <PersonIcon color="action" />
            User Name
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
