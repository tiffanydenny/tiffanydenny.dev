import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { createMuiTheme, responsiveFontSizes, } from '@material-ui/core/styles';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      paddingTop: '1em',
    },
  },

  contentDescription: {
    marginTop: '1rem',
    paddingRight: '5rem',
    opacity: '75%',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
      paddingRight: '10rem',
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

  portTitle: {
    marginRight: '.75rem',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      marginRight: '.25rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3rem',
    },
  },

  portButton: {
    marginRight: '-1rem',
    top: -6.75,
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
  },

  portSubHead: {
    fontSize: '1.4em',
    opacity: '85%',
    paddingRight: '4rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      textAlign: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
      paddingRight: '9rem',
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
            <Typography gutterBottom="true"
                        className={ classes.portHeader }>
              <Link href="https://serene-meadow-33935.herokuapp.com/" target='_blank' rel='noopener' variant="h4" className={ classes.portTitle } >
                Not Twitter
              </Link>
              <IconButton color="primary"
                          aria-label="View on GitHub"
                          href="https://github.com/tiffanydenny/sample_app" target='_blank' rel='noopener'
                          className={ classes.portButton} >
                          <GitHubIcon style={{ fontSize: '1.5em' }} />
              </IconButton>
              <IconButton color="primary"
                          aria-label="View site in production"
                          href="https://serene-meadow-33935.herokuapp.com/" target='_blank' rel='noopener'
                          className={ classes.portButton} >
                          <LaunchIcon style={{ fontSize: '1.75em' }} />
              </IconButton>
            </Typography>
            <Typography variant="body1" gutterBottom="false" className={ classes.portSubHead } >
              Ruby on Rails. SQLite. Bootstrap. SASS. Heroku.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={ classes.contentDescription } >
              <div style={{ paddingBottom: '1em' }}>
              An app that allows users to register, login/out of their account, create 'microposts,' and follow one another. This site was built in order to gain experience with Rails in my quest to skill-build in the area of object-oriented programming.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              Based on a recommendation, I took <a href='https://www.learnenough.com/ruby-on-rails-6th-edition' target='_blank' rel='noopener'>Michael Hartl's Rails Tutorial</a>, and especially appreciated the focus on test-driven, functional programming within the greater scope of the project.
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
