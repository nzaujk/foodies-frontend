import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import LandingPage from './Recipe/components/LandingPage/LandingPage'

// import SignIn from "./HOC/Login/Login";
// import DishTypes from './components/DishTypes/DishTypes'

export default(
  <Fragment>
    <Router>
      <Route exact path="/" component={LandingPage} />
      {/*<Route path="/login" component={SignIn} />*/}
      {/*<Route path="/recipes" component={DishTypes} />*/}
    </Router>
  </Fragment>
)
