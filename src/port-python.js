import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
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
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      width: '100%',
    },
  },

  gifDiv: {
    textAlign: 'center',
  },

  portHeader: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
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
    [theme.breakpoints.down('md')]: {
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

export default function PythonPortfolio() {
  const classes = useStyles();

  return (
    <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          className={ classes.contentContainer }>
      <Grid item md={6} sm={12} className={ classes.gifContainer } >
        <div className={ classes.gifDiv }>
          <img className={ classes.gif } src={require("./images/twittalyzer.gif")} alt="Demo">
          </img>
        </div>
      </Grid>
      <Grid item lg={6} sm={12}>
        <Grid container
              direction="column"
              justify="center"
              alignItems="flex-start"
              className={ classes.contentContainer }>
          <Grid item xs={12}>
            <Typography gutterBottom="true"
                        className={ classes.portHeader }>
              <Link href="https://github.com/tiffanydenny/twittalyzer" target='_blank' rel='noopener' variant="h4" className={ classes.portTitle }>
                Twittalyzer
              </Link>
              <IconButton color="primary"
                          aria-label="View on GitHub"
                          href="https://github.com/tiffanydenny/twittalyzer" target='_blank' rel='noopener'
                          className={ classes.portButton}>
                          <GitHubIcon style={{ fontSize: '1.5em' }} />
              </IconButton>
            </Typography>
            <Typography variant="body1" gutterBottom="false" className={ classes.portSubHead }  >
              Python. PostgreSQL. Flask. Twitter API. Bootstrap.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={ classes.contentDescription } >
              <div>
              <h4 style={{marginBottom: 5}}>What it does</h4>
              Allows users to use OAuth to login with Twitter, and query the Twitter API for statuses based on a keyword. It then performs sentiment analysis on the tweets using the Text Processing API.
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>Why I built it</h4>
              I really enjoy exploring APIs, and wanted to learn more about querying and manipulating data, as I will need to do a lot of this in a project I have planned. I also wanted to become more familiar with Python, especially as it is the language preferred in my computer science courses.
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>Resources</h4>
                <ul style={{marginTop: 0}}>
                  <li><a href='https://www.udemy.com/share/101WR2CEIadVxaQHo=/' target='_blank' rel='noopener'>Python and PostgreSQL Course with Jose Salvatierra </a></li>
                  <li><a href='https://www.youtube.com/watch?v=qw--VYLpxG4&list=PL3Wb0P4edCiszDGASKO99gK7eKUFJi3tU&index=2&t=1s' target='_blank' rel='noopener'>PostgreSQL Tutorial with Nelson Djalo</a></li>
                  <li><a href='https://developer.twitter.com/en/docs/api-reference-index' target='_blank' rel='noopener'> Twitter API Docs </a> | <a href='https://text-processing.com' target='_blank' rel='noopener'> Text Processing API Docs</a> | <a href='https://pypi.org/project/Flask/' target='_blank' rel='noopener'> Flask Docs</a> </li>
                  <li><a href='https://www.coursera.org/learn/what-is-a-proof/home/welcome' target='_blank' rel='noopener'> Mathematical Thinking in Computer Science</a> </li>
                  <li><a href='https://www.coursera.org/specializations/data-structures-algorithms' target='_blank' rel='noopener'> Data Structures and Algorithms Specialization</a> </li>
                </ul>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
