import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';

export default function PythonPortfolio() {
  return (
    <Paper style={{ backgroundColor: '#eceff1', paddingBottom: '5%',paddingTop: '5%', maxWidth: '100%' }} elevation={1} >
      <Grid container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            style={{ maxHeight: '100%'}}>
        <Grid item xs={6} style={{ maxHeight: '70vh' }}>
          <div style={{ textAlign: "center" }}>
            <img style={{ maxHeight: '75vh', transform: 'translateY(-3%)' }} src={require("./images/comingsoon.gif")} alt="Demo">
            </img>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container
                direction="column"
                justify="center"
                alignItems="flex-start">
            <Grid item xs={12}>
              <Typography variant="h4"
                          gutterBottom="true">
                          Twittalyzer
              </Typography>
              <Typography variant="subtitle1" gutterBottom="false">
                Doing stuff with the Twitter API and OAuth
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <IconButton color="primary"
                          aria-label="View on GitHub"
                          href="https://github.com/tiffanydenny" target="_blank">
                          <GitHubIcon style={{ fontSize: '1.5em' }} />
              </IconButton>
              <IconButton color="primary"
                          aria-label="View site in production"
                          href="#" target="_blank">
                          <LanguageIcon style={{ fontSize: '1.75em' }} />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" style={{ marginTop: '1rem' }}>
                Locomotor immobilus lumos wingardium liberacorpus liberacorpus totalus. Mobilicorpus leviosa reparo specialis incantato incantatem. Momentum portus wingardium lumos lumos imperio lumos sonorus.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
