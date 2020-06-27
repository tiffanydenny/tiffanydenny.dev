import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Responsive h1</Typography>
        <Typography variant="h2">Responsive h2</Typography>
        <Typography variant="h3">Responsive h3</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
        <Typography variant="h6">Responsive h6</Typography>
        <Typography variant="subtitle1">Responsive subtitle1</Typography>
        <Typography variant="body1">Responsive body1</Typography>
      </ThemeProvider>
    </div>
  );
}
