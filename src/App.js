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
import Collapse from '@material-ui/core/Collapse';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ControlledExpansionPanels from './devucation.js';
import 'fontsource-roboto';
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

  portfolioCard: {
    minWidth: 275,
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
  devucation: {
    width: '100%',
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
            > Resume PDF
            </Button>
          </div>

          <ArrowDownwardIcon className={ classes.arrow }/>
        </div>
      </Grid>

      <Grid item xs={12} className={ classes.portfolioWrapper }>
        <div className={ classes.portfolioTabs }>
          TABS
        </div>
        <Grid container className={ classes.portfolioDisplay }
              direction="row"
              justify="center"
              alignItems="flex-start">
          <Grid item xs={6} className={ classes.porfolioGif }>
            Gif
          </Grid>
          <Grid item xs={6}>
            <Grid container className={ classes.portfolioInfo }
                  direction="column"
                  justify="center"
                  alignItems="center">
              <Grid item xs={12} className={ classes.portInfoTitle }>
                Title
              </Grid>
              <Grid item xs={12} className={ classes.portInfoTech }>
                Tech Used
              </Grid>
              <Grid item xs={12} className={ classes.portInfoInfo }>
                Description
              </Grid>
              <Grid item xs={12} className={ classes.portInfoResources }>
                <Typography variant="h4" gutterBottom>
                  I'm 'self-taught!' Here's how I learned to code.
                </Typography>
                <ControlledExpansionPanels />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}

export default withStyles(styles)(App);
