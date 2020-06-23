import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function FuturePortfolio() {
  return (
    <Grid container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          style={{ maxHeight: '100%'}}>
      <Grid item xs={6} style={{ maxHeight: '70vh' }}>
        <div style={{ textAlign: "center" }}>
          <img style={{ maxHeight: '75vh', transform: 'translateY(-3%)' }} src={require("./images/swansongif.gif")} alt="Demo">
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
                        Your Project
            </Typography>
            <Typography variant="subtitle1" gutterBottom="false" style={{ paddingRight: '2rem' }}>
              "You can't hack into a typewriter. That's all I have to say."
              - Ron Swanson
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <IconButton color="primary"
                        aria-label="View on GitHub"
                        href="https://github.com/tiffanydenny" target="_blank">
                        <GitHubIcon style={{ fontSize: '1.5em' }} />
            </IconButton>
            <IconButton color="primary"
                        aria-label="LinkedIn"
                        href="https://linkedin.com/in/tiffanydenny" target="_blank">
                        <LinkedInIcon style={{ fontSize: '1.75em' }} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" style={{ marginTop: '1rem', paddingRight: '2rem' }}>
              <div style={{ paddingBottom: '1em' }}>
              Ron Swanson doesn't like computers, but I do!
              </div>
              <div style={{ paddingBottom: '1em' }}>
              I'm looking to become part of a great engineering team. If you think there might be a fit, please reach out!
              </div>
              <div style={{ paddingBottom: '1em' }}>
              I approach my work with curiosity, diligence, good humor, and dedication to quality work. I'm both teachable and effective autonomously, and I won't bullshit you.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              You can reach me at <a href='mailto: tiffany@tiffanydenny.com'>tiffany@tiffanydenny.com</a>, or check out my <a href='https://linkedin.com/in/tiffanydenny'>LinkedIn</a> and <a href='https://github.com/tiffanydenny'>Github</a> profiles.
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
