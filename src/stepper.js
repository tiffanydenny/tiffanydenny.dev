import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import ReactPortfolio from './port-react.js';
import RubyPortfolio from './port-ruby.js';
import PythonPortfolio from './port-python.js';
import FuturePortfolio from './port-future.js';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <div>
            <Grid container
                  spacing={8}
                  direction='row'
                  justify='center'
                  alignItems='center'>
              <Grid item xs={1}>
                <IconButton disabled={activeStep === 0} onClick={handleBack}>
                  <ArrowBackIosIcon />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                {getStepContent(activeStep)}
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
