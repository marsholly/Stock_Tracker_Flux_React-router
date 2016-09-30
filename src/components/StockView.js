import React, { Component } from 'react';
import StockStore from '../stores/StockStore';
import StockActions from '../actions/StockActions';
import moment from 'moment';

export default class StockView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: null
    }
    this._onChange = this._onChange.bind(this);
    this.reFresh = this.reFresh.bind(this);
  }

  componentWillMount() {
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      stock: StockStore.getStock()
    })
  }

  reFresh(symbol) {
    StockActions.lookUpStock(symbol);
  }

  render() {
    let { stock } = this.state;
    let rows;
    if(stock) {
      let { Name, LastPrice, High, Low, Open, Timestamp, ChangeYTD, Symbol} = stock;
      rows = (
        <tr>
          <td>{Name}</td>
          <td>{LastPrice}</td>
          <td>{High}</td>
          <td>{Low}</td>
          <td>{Open}</td>
          <td>{ChangeYTD}</td>
          <td>{moment(Date.parse(Timestamp)).format('lll')}</td>
          <td>
            <button className="btn btn-success btn-md" onClick ={this.reFresh.bind(null,Symbol)}>Refresh</button>
          </td>
        </tr>
      )
    }
    return (
      <div className="container">
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Last Price</th>
              <th>High</th>
              <th>Low</th>
              <th>Open</th>
              <th>ChangeYTD</th>
              <th>Time Stamp</th>
              <th>Refresh</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
};
