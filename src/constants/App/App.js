import PropTypes from "prop-types";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BaseContainer } from '../BaseContainer'
import routes from '../../routes';


class App extends Component {
  render() {
    return (
      <div>
      <BaseContainer> {routes} </BaseContainer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
