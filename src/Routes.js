import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import WebAPI from './components/WebAPI.js';

const RoutePages =() =>  (
  <Router>
    <div>
        <Route exact path="/" component={ SignUp } />
        <Route path='/signup' component={SignUp} />
        <Route path='/webapi' component={WebAPI} />
    </div>
  </Router>
);

export default RoutePages;


