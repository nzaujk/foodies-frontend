/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './Redux/store/configureStore';
import { Root } from './constants/Root/index'
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./constants/Root', () => {
    const NewRoot = require('./constants/Root/Root').default;
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
