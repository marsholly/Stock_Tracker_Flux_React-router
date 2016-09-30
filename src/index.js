import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import CompanyList from './components/CompanyList';
import StockView from './components/StockView';

render(
  <Router history = {browserHistory}>
    <Route path = 'Stock_Tracker_Flux_React-router/' component = {App}>
      <Route path = 'stock' component = {StockView} />
    </Route>
    <Route path = 'companies' component = {CompanyList}/>
  </Router>,
  document.getElementById('root')
)
