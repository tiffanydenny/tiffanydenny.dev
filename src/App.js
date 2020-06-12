import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HorizontalNonLinearStepper from './stepper.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import 'fontsource-roboto';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  header: {
    marginTop: '1vh',
    maxWidth: '95%',
  },

  headerAvatar: {
    textAlign: 'left',
  },

  headerEmail: {
    textAlign: 'right',
    textDecorationStyle: 'none',
  },

  introWrapper: {
    width: '100vw',
    height: '100vh',
    paddingLeft: 40,
    paddingRight: 40,
    position: 'relative',
  },

  intro: {
    maxWidth: '70vw',
    textAlign: 'left',
    position: 'relative',
    top: "20vh",
  },

  introText: {
      marginBottom: 10,
  },

  button: {
    position: 'relative',
    left: 0,
    top: 30,
  },

  arrow: {
    animation: 'bounce 2s infinite',
    position: 'absolute',
    left: 40,
    bottom: '3rem',
    },

  portfolioWrapper: {
    position: 'relative',
  },

  porfolioGif: {
    textAlign: "center",
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  porfolioTitle: {
    fontSize: 14,
  },

  portfolioLink: {
    marginBottom: 12,
  },

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

  footer: {
    backgroundColor: "#37474f",
    color: "#fff",
    height: 300,
    opacity: "75%",
    position: "relative",
  },

  footerNav: {
    bottom: "3em",
    left: "45vw",
    position: "absolute",
    textAlign: "center",
  }
});

function App(props) {
  const { classes } = props
  return (
    <div className="App">
    <Grid container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          spacing={5}
    >
        <Grid item xs={12}>
          <div className={ classes.introWrapper }>
            <Grid className={ classes.header } container spacing={3}>
              <Grid item xs={6}>
                <Grid container spacing={3}
                                justify="flex-start"
                                alignItems="center"
                                >
                  <Grid item sm={1} xs={2}>
                    <Avatar alt="Tiffany Denny" src={ require(`./images/Tiff_headshot_site.jpg`) }/>
                  </Grid>
                  <Grid className={ classes.headerAvatar } item sm={11} xs={10}>
                  <Typography variant="h6">Tiffany Denny
                  </Typography>
                  <Typography variant="subtitle1">Software Developer
                  </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={ classes.headerEmail } item xs={6}>
              <Typography variant="subtitle1"><a href="mailto: tiffany@tiffanydenny.com">tiffany@tiffanydenny.com</a>
              </Typography>
              </Grid>
            </Grid>
            <div className={ classes.intro }>
              <div className={ classes.introText }>
                <Typography variant="h3"
                            gutterBottom="true">
                            How can I help?
                </Typography>
                <Typography variant="subtitle1"
                            gutterBottom="true">
                            I used to help people relieve pain as a physical therapist and yoga instructor. Now I solve problems for people as a software developer - just another type of pain relief, really. I'm self-taught and looking for my first job in the industry. If you're hiring, I'd love to chat.
                </Typography>
                <Typography variant="subtitleh6">
                            <a href="mailto: tiffany@tiffanydenny.com"> Get in touch!</a>
                </Typography>
              </div>
              <Button
              variant="contained"
              color="primary"
              size="large"
              className={ classes.button }
              startIcon={ <CloudDownloadIcon /> }
              href="https://drive.google.com/file/d/1LnHqRL_pRH28hdrytECZ4Cc_69FEDEV3/view?usp=sharing"
              target="_blank"
              > Download My Resume
              </Button>
            </div>

            <ArrowDownwardIcon className={ classes.arrow }/>
          </div>
        </Grid>

        <Grid item xs={12} className={ classes.portfolioWrapper } style={{height: '100vh'}}>

          <HorizontalNonLinearStepper />
          <Paper elevation={3} styles={{ maxWidth: "80%", backgroundColor: "#e0e0de" }}>
            <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="stretch"
                  style={{height: '100%'}}>
              <Grid item xs={6} style={{height: '100%'}}>
                <div style={{ textAlign: "center"}}>
                  <img src="https://media.giphy.com/media/XDLhs1wznnRDDkxIfe/giphy.gif" alt="Demo">
                  </img>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography variant="h4"
                                gutterBottom="true">
                                Github Battle
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Doing stuff with the Github API
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <GitHubIcon /> <LanguageIcon />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Locomotor immobilus lumos wingardium liberacorpus liberacorpus totalus. Mobilicorpus leviosa reparo specialis incantato incantatem. Momentum portus wingardium lumos lumos imperio lumos sonorus.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    </Grid>
    <div className={ classes.footer }>
      <Grid container
            direction="row"
            justify="center"
            alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" >
            Tiffany Denny
          </Typography>
          <Typography variant="body1" >
            <a href="mailto: tiffany@tiffanydenny.com"> tiffany@tiffanydenny.com </a>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" >
            A funny
          </Typography>
        </Grid>
      </Grid>
      <div className={ classes.footerNav }>
        <GitHubIcon style={{ fontSize: '2em', marginRight: '1em' }} /> <LinkedInIcon style={{ fontSize: '2em', marginRight: '1em' }} /> <TwitterIcon style={{ fontSize: '2em' }} />
      </div>
    </div>
  </div>
  );
}

export default withStyles(styles)(App);
