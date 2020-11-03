import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'

import "./index.scss";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
