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
      fontSize: '1.4rem',
      paddingRight: '6rem',
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
    fontSize: '1.3rem',
    marginBottom: 0,
    opacity: '85%',
    paddingRight: '4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
      paddingRight: 0,
      textAlign: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
      paddingRight: '6rem',
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
              <div>
              <h4 style={{marginBottom: 5}}>What it does</h4>
              Handles user registration, authorization, authentication, and user data based on users' relationships to the 'microposts' they create as well as relationships to one another via 'follow' and 'unfollow' options.
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>Why I built it</h4>
              I wanted to gain experience in object-oriented programming, and the Rails community seemed especially supportive. It also gave me an opportunity to dig into test-driven development and relational databases. Both the front-end and back-ends of this site were built in Rails, though, which prompted me to seek out another front-end solution (hello, React!).
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>Resources</h4>
                <ul style={{marginTop: 0}}>
                  <li><a href='https://www.learnenough.com/ruby-on-rails-6th-edition' target='_blank' rel='noopener'>Michael Hartl's Rails Tutorial</a></li>
                  <li><a href='https://api.rubyonrails.org/' target='_blank' rel='noopener'>Rails API</a></li>
                </ul>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
