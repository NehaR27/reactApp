import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import RoutePages from './Routes.js';

const routes = RoutePages();
ReactDOM.render(
  routes,
      document.getElementById("app")
);