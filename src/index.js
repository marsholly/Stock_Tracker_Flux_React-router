import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import CompanyList from './components/CompanyList';
import StockView from './components/StockView';

render(
  <Router history = {browserHistory}>
    <Route path = '/' component = {App}>
      <Route path = 'stock' component = {StockView} />
    </Route>
    <Route path = 'companies' component = {CompanyList}/>
  </Router>,
  document.getElementById('root')
)
