import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home ';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/home" exact component={Home} isPrivate />
  </Switch>
);

export default Routes;
