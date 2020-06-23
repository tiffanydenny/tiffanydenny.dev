import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';

export default function ReactPortfolio() {
  return (
    <Grid container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          style={{ maxHeight: '100%'}}>
      <Grid item xs={6} style={{ maxHeight: '70vh' }}>
        <div style={{ textAlign: "center" }}>
          <img style={{ maxHeight: '75vh', transform: 'translateY(-3%)' }} src={require("./images/ghbattle.gif")} alt="Demo">
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
            <Typography variant="subtitle1" gutterBottom="false" style={{ paddingRight: '2rem'}} >
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
            <Typography variant="body1" style={{ marginTop: '1rem', paddingRight: '2rem' }}>
              <div style={{ paddingBottom: '1em' }}>
              After completing courses in JavaScript and Ruby (from the <a href='https://www.learnenough.com/'>LearnEnough series with Michael Hartl </a>), I really wanted to explore better front-end options for future projects.
              </div>
              <div style={{ paddingBottom: '1em' }}>
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
