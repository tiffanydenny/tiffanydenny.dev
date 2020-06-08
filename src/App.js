import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ControlledExpansionPanels from './devucation.js';
import logo from './logo.svg';
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
  },

  intro: {
    maxWidth: '70vw',
    textAlign: 'left',
    position: 'relative',
    top: "30%",
  },

  introWrapper: {
    width: '100vw',
    height: '100vh',
    paddingLeft: 40,
    paddingRight: 40,
    position: 'relative',
  },

  button: {
    position: 'absolute',
    left: 40,
    bottom: '30%',
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
            <Typography variant="subtitle1">tiffany@tiffanydenny.com
            </Typography>
            </Grid>
          </Grid>
          <div className={ classes.intro }>
            <Typography variant="h3"
                        gutterBottom="true">
                        Need something built?
            </Typography>
            <Typography variant="subtitle1">
                        That's my jam!
            </Typography>
          </div>
          <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<CloudDownloadIcon />}
          href="./images/denny_resume.pdf"
          > Resume PDF
          </Button>
          <div>
            <ArrowDownwardIcon className={ classes.arrow }/>
          </div>
        </div>
      </Grid>

      <Grid item xs={12}>
        <div className={ classes.portfolioWrapper }>
          <Card className={classes.portfolioCard} variant="outlined">
            <CardContent>
              <Typography className={classes.porftolioTitle} color="textSecondary" gutterBottom>
                Portfolio Stand-in
              </Typography>
              <Typography variant="h5" component="h2">
                Repo Title
              </Typography>
              <Typography className={classes.portfolioLink} color="textSecondary">
                Live site link
              </Typography>
              <Typography variant="body2" component="p">
                Repo info
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View on github</Button>
            </CardActions>
          </Card>
        </div>
      </Grid>

      <Grid className={ classes.paragraph } item xs={12}>
        <Typography variant="body1" gutterBottom>
          Thanks for checking out my site! I'm a software developer, but I spent twelve years in a rewarding career as a healthcare and wellness professional. I worked in clinical settings as a physical therapist, explored entrepreneurship as a yoga teacher and yoga therapist, and learned a great deal working in the nonprofit sector.
        </Typography>
        <Typography variant="body1" gutterBottom>
          During that time, I was physically challenged with surgeries on my knees and ankles that created gaps in my employment and created a loss of confidence that a physically demanding career was right for me. I had a lot of “down” time, and the one thing I could always do consistently was work and explore on my computer. At one point, I realized technology heavily impacted every industry in which I had worked, and I began educating myself in software development. As it turns out, I feel curious, excited, and driven when working out coding problems and learning new technologies.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Now I translate the critical-thinking and problem-solving skills I used as a medical professional into my work in technology. I am a self-taught developer, currently with some experience with HTML/CSS, Ruby/Rails, JavaScript, Python, postgreSQL, and API development, and I'm looking for my first job in the field.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please get in touch if you're hiring! I would welcome the chance to prove that my professional history combined with my ability to learn quickly, an equanimous and good-humored personality, and my commitment to producing quality work, will make me a great addition to your team.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          I'm 'self-taught!' Here's how I learned to code.
        </Typography>
        <ControlledExpansionPanels />
      </Grid>
    </Grid>
  </div>
  );
}

export default withStyles(styles)(App);
