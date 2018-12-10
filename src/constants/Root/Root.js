import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from '../App/App';

export default class Root extends Component {
  render() {
    //const { store, history } = this.props;
    return (
          <App />
    );
  }
}

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// };
