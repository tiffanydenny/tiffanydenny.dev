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
            <Typography variant="subtitle1" gutterBottom="false" style={{ paddingRight: '2rem'}} >
              Python app using the Twitter API and OAuth
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
            <Typography variant="body1" style={{ marginTop: '1rem', paddingRight: '2rem' }}>
              <div style={{ paddingBottom: '1em' }}>
              As my interest in backend develpment grew, I wanted more experience with databases, so I took this <a href='https://www.youtube.com/watch?v=qw--VYLpxG4&list=PL3Wb0P4edCiszDGASKO99gK7eKUFJi3tU&index=2&t=1s'>PostgreSQL Tutorial </a> with Nelson Djalo.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              The aforementioned tutorial fueled my interest further, leading me to this <a href='https://www.udemy.com/share/101WR2CEIadVxaQHo=/'>Python and PostgreSQL course </a> on Udemy with Jose Salvatierra. This Twittalyzer project is a product of my work in that course, where I used OAuth and the Twitter API to allow users to securely login and filter Twitter content.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              I was also introduced to Flask in this course, and it made me want to continue digging deeper into database development and become versed in Docker, Kubernetes, and AWS cloud development.
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
