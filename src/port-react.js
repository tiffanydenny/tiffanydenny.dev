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

export default function ReactPortfolio() {
  const classes = useStyles();

  return (
    <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          className={ classes.contentContainer }>
      <Grid item md={6} sm={12} className={ classes.gifContainer } >
        <div className={ classes.gifDiv }>
          <img className={ classes.gif } src={require("./images/ghbattle.gif")} alt="Demo">
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
              <Link href="https://dazzling-babbage-f6a7b6.netlify.app/" target='_blank' rel='noopener' variant="h4" className={ classes.portTitle }>
                Github Battle
              </Link>
              <IconButton color="primary"
                          aria-label="View on GitHub"
                          href="https://github.com/tiffanydenny/github-battle" target='_blank' rel='noopener'
                          className={ classes.portButton} >
                          <GitHubIcon style={{ fontSize: '1.5em' }} />
              </IconButton>
              <IconButton color="primary"
                          aria-label="View site in production"
                          href="https://dazzling-babbage-f6a7b6.netlify.app/" target='_blank' rel='noopener'
                          className={ classes.portButton} >
                          <LaunchIcon style={{ fontSize: '1.75em' }} />
              </IconButton>
            </Typography>
            <Typography variant='body1' gutterBottom="false" className={ classes.portSubHead } >
              ReactJS. Github API. Webpack. CSS3. Netlify.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={ classes.contentDescription } >
              <div>
              <h4 style={{marginBottom: 5}}>What it does</h4>
              Using the Github API, it filters popular profiles for different coding languages, and lets you "battle" other developers based on follower and repo counts.
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>Why I built it</h4>
              After completing courses in JavaScript and Ruby, I found I needed better front-end options for future projects. I liked what I'd seen from React, and was inspired through this experience to use React for my portfolio site as well as for the front-end of my <a href='https://github.com/tiffanydenny/elm_app' target='_blank' rel='noopener'>next project</a>.
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>Resources</h4>
                <ul style={{marginTop: 0}}>
                  <li><a href='https://ui.dev/' target='_blank' rel='noopener'>Tyler McGinnis ReactJS course</a></li>
                  <li><a href='https://www.youtube.com/watch?v=YaZg8wg39QQ&list=PL3Wb0P4edCiszDGASKO99gK7eKUFJi3tU&index=5&t=2s' target='_blank' rel='noopener'>Michael Chan's talk on React Component Patterns</a></li>
                  <li><a href='https://www.learnenough.com/' target='_blank' rel='noopener'>LearnEnough series with Michael Hartl </a> </li>
                </ul>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
