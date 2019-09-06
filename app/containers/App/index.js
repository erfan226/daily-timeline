/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import HomePage from 'containers/HomePage/Loadable';
import Authenication from 'containers/Authenication';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import theme from '../../theme';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Authenication} />
          <Route exact path="/register" component={Authenication} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
