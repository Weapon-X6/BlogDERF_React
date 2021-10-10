import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
//import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright "}
      <Link color="inherit" href="https://eduaroargueta.codes">
        Ohms
      </Link>
      {""}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Company",
    description: ["Team", "History"],
  },
  {
    title: "Feautres",
    description: ["Coole", "NachDemGenesis"],
  },
];

function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}></Grid>
          ))}
        </Grid>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

export default Footer;
