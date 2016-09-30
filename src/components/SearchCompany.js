import React, { Component } from 'react';
import StockActions from '../actions/StockActions';

export default class SearchCompany extends Component {
  constructor() {
    super();
    this.state = {
      symbol: ''
    }
    this.searchCompany = this.searchCompany.bind(this);
  }

  searchCompany(event){
    event.preventDefault();
    let { symbol } = this.state;
    StockActions.lookUpCompany(symbol);
    this.setState({ symbol: '' });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className = "searchArea">
            <form onSubmit={this.searchCompany}>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Symbol"
                  value = {this.state.symbol}
                  onChange = {(e) => this.setState({ symbol: e.target.value })}
                />
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
