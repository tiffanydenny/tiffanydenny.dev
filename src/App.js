import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HorizontalNonLinearStepper from './stepper.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import 'fontsource-roboto';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Hidden from '@material-ui/core/Hidden';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles((theme) => ({

  paragraph: {
    maxWidth: '75%',
    paddingLeft: '30vw',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  header: {
    marginTop: 20,
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: 5,
    },
  },

  avatar: {
    [theme.breakpoints.up('xl')]: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  },

  headerTextGrid: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'right',
      paddingRight: 5,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 5,
    },
  },

  headerName: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.75em',
    },
  },

  headerText: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5em',
    },
  },

  headerEmail: {
    textAlign: 'right',
    textDecorationStyle: 'none',
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5em',
    },
  },

  introWrapper: {
    width: '94%',
    height: '100vh',
    paddingLeft: 40,
    paddingRight: 40,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },

  intro: {
    maxWidth: '70vw',
    textAlign: 'left',
    position: 'relative',
    top: '20vh',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90vw',
      top: '10vh',
    },
    [theme.breakpoints.up('xl')]: {
      top: '25vh',
    },
  },

  introText: {
      marginBottom: 10,
      maxWidth: '100%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '90vw',
        top: '10vh',
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: '90%',
        fontSize: '1.4em',
      },
  },

  download: {
    position: 'relative',
    left: 0,
    top: 30,
    [theme.breakpoints.up('xl')]: {
      height: '3rem',
      width: '21rem',
      fontSize: '1.2rem',
    },
  },

  arrow: {
    animation: 'bounce 2s infinite',
    position: 'absolute',
    left: 40,
    bottom: '3rem',
    onScroll: 'display=none',
    },

  arrowhide: {
    display: 'none',
  },

  portfolioWrapper: {
    left: '50%',
    marginBottom: '10%',
    position: 'relative',
    transform: 'translateX(-50%)',
    maxWidth: '97%',
  },

  footer: {
    backgroundColor: "#263238",
    color: "#fff",
    height: 275,
    opacity: "75%",
    paddingTop: '2em',
    position: "relative",
  },

  footerInfo: {
    textAlign: 'center',
  },

  footerNav: {
    marginBottom: '1em',
    marginTop: '1em',
  },

  footerFunny: {
    maxWidth: '75%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%',
    },
  },
}));


export default function App() {
  const trigger = useScrollTrigger();
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container
            direction="column"
            justify="space-between"
            alignItems="stretch"
            spacing={0} >
        <Grid item xs={12} >
          <div className={ classes.introWrapper }>
            <Grid className={ classes.header } container spacing={0}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={0}
                                justify="flex-start"
                                alignItems="center"
                                >
                  <Grid item md={1} sm={2} xs={6} >
                    <Avatar alt="Tiffany Denny" className={ classes.avatar } src={ require(`./images/Tiff_headshot_site.jpg`) }/>
                  </Grid>
                  <Grid className={ classes.headerTextGrid } item md={11} sm={10} xs={6}>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h6" className={ classes.headerName }>
                      Tiffany Denny
                    </Typography>
                    <Typography variant="subtitle1" className={ classes.headerText }>
                      Software Developer
                    </Typography>
                  </ThemeProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={ classes.headerEmail } item xs={6}>
                <Hidden xsDown>
                  <Button color="primary"
                          style={{ textTransform: "lowercase", fontSize: "1em"}}
                          href="mailto: tiffany@tiffanydenny.com"
                          target="_blank">
                          tiffany@tiffanydenny.com
                  </Button>
                </Hidden>
              </Grid>
            </Grid>
            <div className={ classes.intro }>
              <div className={ classes.introText }>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3"
                              gutterBottom="true">
                              How can I help?
                  </Typography>
                  <Typography variant="subtitle1"
                              gutterBottom="true"
                              style={{ fontSize: '1.2em'}}>
                              I used to help people relieve pain as a physical therapist and yoga instructor. Now I solve problems for people as a software developer - just another type of pain relief, really.

                              I'm game to work on the back end or the front end (or both) of a project, and am currently looking to join a great team as a junior developer. If you're hiring, I'd love to chat.
                  </Typography>
                </ThemeProvider>
                <Hidden smUp>
                  <Button color="primary"
                          href="mailto: tiffany@tiffanydenny.com"
                          target='_blank' rel='noopener'>
                          Get in touch -->
                  </Button>
                </Hidden>
              </div>
              <Button
              variant="contained"
              color="primary"
              size="large"
              className={ classes.download }
              startIcon={ <CloudDownloadIcon /> }
              href="https://drive.google.com/file/d/1LnHqRL_pRH28hdrytECZ4Cc_69FEDEV3/view?usp=sharing"
              target='_blank' rel='noopener'
              > Download My Resume
              </Button>
            </div>
            <div>
              <ArrowDownwardIcon className={ trigger ? classes.arrowhide : classes.arrow } />
            </div>
          </div>
        </Grid>

      <Grid item xs={12} className={ classes.portfolioWrapper }>
        <HorizontalNonLinearStepper />
      </Grid>
    </Grid>

    <div className={ classes.footer }>
      <Grid container
            direction='column'
            justify='space-evenly'
            alignItems='center'
            spacing={0}>
        <Grid item xs={12} className={ classes.footerInfo }>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" >
              Tiffany Denny
            </Typography>
          </ThemeProvider>
          <Button color="grey"
                  href="mailto: tiffany@tiffanydenny.com"
                  target='_blank' rel='noopener'
                  style={{ textTransform: "lowercase", color: '#78909c'}}>
                  tiffany@tiffanydenny.com
          </Button>
        </Grid>
        <Grid item xs={12} >
          <ThemeProvider theme={theme}>
            <Typography className={ classes.footerNav }>
              <Link href="https://github.com/tiffanydenny" target='_blank' rel='noopener'>
                <GitHubIcon style={{ color: 'white', fontSize: '2.5em', marginRight: '1em' }} />
              </Link>
              <Link href="https://linkedin.com/in/tiffanydenny" target='_blank' rel='noopener'>
                <LinkedInIcon style={{ color: 'white', fontSize: '2.5em',
                marginRight: '1em' }} />
              </Link>
              <Link href="https://twitter.com/tiff_outdoors" target='_blank' rel='noopener'>
                <TwitterIcon style={{ color: 'white', fontSize: '2.5em' }} />
              </Link>
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} className={ classes.footerFunny }>
          <Typography variant='body1' >
          A programmer asks — “Would you go to the shop and pick up a loaf of bread? And if they have eggs, get a dozen.” The other programmer returns with 12 loaves of bread. “They had eggs.” <span style={{ fontStyle: 'italic', fontSize: '.9em'}}> ~DCSL Software </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  </div>
  );
}
