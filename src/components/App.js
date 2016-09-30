import React, { Component } from 'react';
import SearchCompany from './SearchCompany';
import CompanyList from './CompanyList';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Stock Tracker</h1>
        <SearchCompany />
        <CompanyList />
        <br/>
        {this.props.children}
      </div>
    )
  }
};
