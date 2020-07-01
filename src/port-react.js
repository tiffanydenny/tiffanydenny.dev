import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, responsiveFontSizes, } from '@material-ui/core/styles';

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
            <Typography variant="h4"
                        gutterBottom="true"
                        className={ classes.portHeader }>
                        Github Battle
            </Typography>
            <Typography variant="subtitle1" gutterBottom="false" className={ classes.portSubHead }  >
              Making use of the Github API
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <IconButton color="primary"
                        aria-label="View on GitHub"
                        href="https://github.com/tiffanydenny/github-battle" target="_blank">
                        <GitHubIcon style={{ fontSize: '1.5em' }} />
            </IconButton>
            <IconButton color="primary"
                        aria-label="View site in production"
                        href="https://dazzling-babbage-f6a7b6.netlify.app/" target="_blank">
                        <LanguageIcon style={{ fontSize: '1.75em' }} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={ classes.contentDescription } >
              <div style={{ paddingBottom: '1em', }}>
              After completing courses in JavaScript and Ruby (from the <a href='https://www.learnenough.com/'>LearnEnough series with Michael Hartl </a>), I really wanted to explore better front-end options for future projects.
              </div>
              <div style={{ paddingBottom: '1em', }}>
              I went with ReactJS, and made this fun app that not only makes use of several features of ReactJS, but also allowed me to practice engaging with the Github API. This app was made with the help of the <a href='https://ui.dev/'>Tyler McGinnis ReactJS course</a>, and some supplemental learning from videos such as <a href='https://www.youtube.com/watch?v=YaZg8wg39QQ&list=PL3Wb0P4edCiszDGASKO99gK7eKUFJi3tU&index=5&t=2s'>Michael Chan's talk on React Component Patterns</a>.
              </div>
              <div style={{ paddingBottom: '1em' }}>
              After making this app, I decided to use React for my own dev site, the very one you are perusing right now, and am beginning a new project that will feature React on the front end as well!
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
