import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from "@material-ui/core"
import "./Fonts/GreycliffCF-Regular.ttf";
import "./Fonts/GreycliffCF-Bold.ttf";
import { StylesProvider } from '@material-ui/core/styles';

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
