import React, { Component } from 'react';
import StockStore from '../stores/StockStore';
import { Link } from 'react-router';

export default class CompanyList extends Component {
  constructor() {
    super();
    this.state = {
      companies: null
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      companies: StockStore.getCompanies()
    })
  }

  render() {
    let { companies } = this.state;
    let rows;
    if (companies) {
      rows = companies.map((company,index) => {
        let {Exchange, Name, Symbol} = company;
        return (
          <tr key={index}>
            <td>{Symbol}</td>
            <td>{Name}</td>
            <td>{Exchange}</td>
            <td>
              <Link to={`/stock/${Symbol}`}>
                <button className="btn btn-xs btn-info">
                  <i className='glyphicon glyphicon-usd'></i>
                </button>
              </Link>
            </td>
          </tr>
        )
      })
    }
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Exchange</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
};
