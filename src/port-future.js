import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import { createMuiTheme, responsiveFontSizes,} from '@material-ui/core/styles';


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
            <Typography gutterBottom="true"
                        className={ classes.portHeader }>
              <Link href='mailto:tiffany@tiffanydenny.com' target='_blank' rel='noopener' variant='h4' className={ classes.portTitle }>
                Your Project
              </Link>
              <IconButton color="primary"
                          aria-label="View on GitHub"
                          href="https://github.com/tiffanydenny" target="_blank"
                          className={ classes.portButton}>
                          <GitHubIcon style={{ fontSize: '1.5em' }} />
              </IconButton>
              <IconButton color="primary"
                          aria-label="LinkedIn"
                          href="https://linkedin.com/in/tiffanydenny" target="_blank"
                          className={ classes.portButton}>
                          <LinkedInIcon style={{ fontSize: '1.75em' }} />
              </IconButton>
            </Typography>
            <Typography variant="body1" gutterBottom="false" className={ classes.portSubHead } >
              "You can't hack into a typewriter. That's all I have to say."
              - Ron Swanson
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={ classes.contentDescription } >
              <div>
              Ron Swanson doesn't like computers, but I do!
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>What I do</h4>
              I'm familiar with Python, Ruby/Rails, JavaScript, ReactJS, HTML5/CSS3, and SQL, as well as the basics of test-driven development and API development. I am also excellent at reading documentation, forum posts, and helpful videos to learn anything necessary to complete a task.
              </div>
              <div>
              <h4 style={{marginBottom: 5}}>Why Me</h4>
              I approach my work with curiosity, diligence, and good humor, and I'm dedicated to learning and constant improvement. I am teachable, but also quite effective autonomously, and I have excellent problem-solving and people skills from 15 years in health and wellness.
              </div>
              <div style={{ paddingTop: '1em' }}>
              If you're looking for a new team member, I'd be happy to chat! Please feel free to <a href='mailto: tiffany@tiffanydenny.com' target='_blank' rel='noopener'>reach out</a>. 
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
