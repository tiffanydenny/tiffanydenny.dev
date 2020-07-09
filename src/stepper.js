import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactPortfolio from './port-react.js';
import RubyPortfolio from './port-ruby.js';
import PythonPortfolio from './port-python.js';
import FuturePortfolio from './port-future.js';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },

  portfolioContent: {
    backgroundColor: '#eceff1',
    width: '100%',
    minHeight: '75vh',
    maxHeight: '75vh',
    paddingBottom: '5%',
    paddingTop: '5%',
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#fff',
      maxHeight: '75%',
    },
  },
}));

function getSteps() {
  return ['ReactJS', 'Ruby on Rails', 'Python & PostgreSQL', '???'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ReactPortfolio />;
    case 1:
      return <RubyPortfolio />;
    case 2:
      return <PythonPortfolio />;
    case 3:
      return <FuturePortfolio />
    default:
      return <ReactPortfolio />;
  }
}

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              <Hidden xsDown>{label}</Hidden>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <Grid container
              direction='row'
              justify='center'
              alignItems='center'>
          <Grid item xs={1} style={{ textAlign: 'center' }}>
            <IconButton disabled={activeStep === 0} onClick={handleBack}>
              {theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
            </IconButton>
          </Grid>
          <ThemeProvider theme={theme}>
            <Grid item xs={9} sm={8} md={8} lg={10}>
              <Paper className={ classes.portfolioContent } elevation={0} >
                {getStepContent(activeStep)}
              </Paper>
            </Grid>
          </ThemeProvider>
          <Grid item xs={1} style={{ textAlign: 'center' }}>
            <IconButton
              color="primary"
              onClick={handleNext}
            >
              {theme.direction === 'rtl' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
