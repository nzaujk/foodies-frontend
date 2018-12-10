import React, { Component, Fragment } from 'react';
// import { Route, Switch, withRouter } from 'react-router-dom';
// import { Header } from '../../components/Header/'
// import { LandingPage } from '../../containers/LandingPage/index'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BaseTheme } from '../BaseTheme';


class BaseContainer extends Component {
  renderBase = () => (
    <MuiThemeProvider theme={BaseTheme}>
      <Fragment>
        <div>
          <h1>Foodies</h1>
          {/*<Header />*/}
          {/*<LandingPage />*/}
        </div>
      </Fragment>
    </MuiThemeProvider>);
  render() {
    return (
      this.renderBase()
    )
  }
}
export default BaseContainer;
