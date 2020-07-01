import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { createMuiTheme, responsiveFontSizes,} from '@material-ui/core/styles';

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1em',
      alignItems: 'center',
    },
  },

  contentDescription: {
    marginTop: '1rem',
    paddingRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0
    },
  },

  gif: {
    maxHeight: '75vh',
    maxWidth: '100%',
    transform: 'translateY(-3)',
  },

  gifContainer: {
    maxHeight: '75vh',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '100%',
    },
  },

  gifDiv: {
    textAlign: 'center',
  },

  portHeader: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  portSubHead: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}))

export default function FuturePortfolio() {
  const classes = useStyles();

  return (
    <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          className={ classes.contentContainer }>
      <Grid item md={6} sm={12} className={ classes.gifContainer } >
        <div className={ classes.gifDiv }>
          <img className={ classes.gif } src={require("./images/swansongif.gif")} alt="Demo">
          </img>
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <Grid container
              direction="column"
              justify="center"
              alignItems="flex-start"
              className={ classes.contentContainer }>
          <Grid item xs={12}>
            <Typography variant="h4"
                        gutterBottom="true"
                        className={ classes.portHeader }>
                        Your Project
            </Typography>
            <Typography variant="subtitle1" gutterBottom="false" className={ classes.portSubHead } >
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
            <Typography variant="body1" className={ classes.contentDescription } >
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
