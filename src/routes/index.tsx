import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Route from './Route';

import Landing from '../pages/Landing';
import Ongs from '../pages/Ongs';
import Ong from '../pages/Ong';
import Project from '../pages/Project';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/ongs" exact component={Ongs} />
    <Route path="/ongs/:id" exact component={Ong} />
    <Route path="/projects/:id" exact component={Project} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Redirect to="/" />
  </Switch>
);

export default Routes;
