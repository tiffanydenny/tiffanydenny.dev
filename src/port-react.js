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
              <div style={{ paddingBottom: '1em', }}>
              Once I completed courses in JavaScript and Ruby (from the <a href='https://www.learnenough.com/' target='_blank' rel='noopener'>LearnEnough series with Michael Hartl </a>), I found I needed better front-end options for future projects.
              </div>
              <div style={{ paddingBottom: '1em', }}>
              I like what I'd seen from ReactJS, and made this fun app that not only makes use of several features of ReactJS, but also allowed me to practice engaging with the Github API. This app was made with the help of the <a href='https://ui.dev/' target='_blank' rel='noopener'>Tyler McGinnis ReactJS course</a>, and some supplemental learning from videos such as <a href='https://www.youtube.com/watch?v=YaZg8wg39QQ&list=PL3Wb0P4edCiszDGASKO99gK7eKUFJi3tU&index=5&t=2s' target='_blank' rel='noopener'>Michael Chan's talk on React Component Patterns</a>.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              This experience inspired me to use React for my own dev site, the very one you are perusing right now, and I've begun a <a href='https://github.com/tiffanydenny/elm_app' target='_blank' rel='noopener'>new project</a> that will feature React on the front end as well!
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
