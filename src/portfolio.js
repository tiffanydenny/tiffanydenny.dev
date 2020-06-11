import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { DiRor } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiSqllite } from "react-icons/di";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Github Battle" {...a11yProps(0)} />
          <Tab label="Not Twitter" {...a11yProps(1)} />
          <Tab label="Twittalyzer" {...a11yProps(2)} />
          <Tab label="ELM App" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
            <Card className={classes.root}>
              <CardContent>
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography variant="h4"
                                gutterBottom="true">
                                <a href="#">Github Battle</a> <GitHubIcon />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Locomotor immobilus lumos wingardium liberacorpus liberacorpus totalus. Mobilicorpus leviosa reparo specialis incantato incantatem. Momentum portus wingardium lumos lumos imperio lumos sonorus.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} alignItems="stretch">
                    <Typography variant="h5"
                                gutterBottom="true">
                                Made with:  <DiReact style={{ fontSize: "1.5em" }} /> <DiJavascript1 style={{ fontSize: "1.5em" }} />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{marginTop: "2em"}}>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      Learning Resources
                    </Typography>
                    <Typography variant="h6" component="h2">
                      <a href="https://tylermcginnis.com/">ReactJS Course with Tyler McGinnis </a>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Locomotor immobilus lumos wingardium liberacorpus liberacorpus totalus. Mobilicorpus leviosa reparo specialis incantato incantatem. Momentum portus wingardium lumos lumos imperio lumos sonorus.
                    </Typography>
                    <Typography variant="h6" component="h2">
                      <a href="https://youtu.be/YaZg8wg39QQ">React Component Patterns by Michael Chan on Youtube </a>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Locomotor immobilus lumos wingardium liberacorpus liberacorpus totalus. Mobilicorpus leviosa reparo specialis incantato incantatem. Momentum portus wingardium lumos lumos imperio lumos sonorus.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
