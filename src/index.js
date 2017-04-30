import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Whhoops } from './Components/Whhoops';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/list-days" component={App} />
      <Route path="/add-day" component={App} />
      <Route path="*" component={Whhoops} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
