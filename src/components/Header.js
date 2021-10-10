import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseLine from "@material-ui/core/CssBaseLine";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // eslint-disable-next-line no-template-curly-in-string
    borderBottom: "1px solid ${theme.palette.divider}",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseLine />

      <AppBar
        position="static"
        color="white"
        elevation="{0}"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" color="gold" noWrap>
            BlogmeUp
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
