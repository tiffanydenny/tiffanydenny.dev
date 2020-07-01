import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, responsiveFontSizes, } from '@material-ui/core/styles';


let theme = createMuiTheme();
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

export default function RubyPortfolio() {
  const classes = useStyles();

  return (
    <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          className={ classes.contentContainer }>
      <Grid item md={6} sm={12} className={ classes.gifContainer } >
        <div className={ classes.gifDiv }>
          <img className={ classes.gif } src={require("./images/nottwitter.gif")} alt="App Demo Gif">
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
                        Not Twitter
            </Typography>
            <Typography variant="subtitle1" gutterBottom="false" className={ classes.portSubHead } >
              An app that allows users to register, login/out of their account, create 'microposts,' and follow one another.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <IconButton color="primary"
                        aria-label="View on GitHub"
                        href="https://github.com/tiffanydenny/sample_app" target="_blank">
                        <GitHubIcon style={{ fontSize: '1.5em' }} />
            </IconButton>
            <IconButton color="primary"
                        aria-label="View site in production"
                        href="https://serene-meadow-33935.herokuapp.com/" target="_blank">
                        <LanguageIcon style={{ fontSize: '1.75em' }} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={ classes.contentDescription } >
              <div style={{ paddingBottom: '1em' }}>
              This site was built in order to gain experience with Rails in my quest to skill-build in the area of object-oriented programming.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              Based on a recommendation, I took <a href='https://www.learnenough.com/ruby-on-rails-6th-edition'>Michael Hartl's Rails Tutorial</a>, and especially appreciated the focus on test-driven, functional programming within the greater scope of the project.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              The project allowed me to work with handling user data and authentication, and allowing users have relationships with their individual posts as well as with other users. The database is SQLite, and both the front and back ends are developed using Rails, which is one of the things that prompted me to learn React.
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
