import React, { Component } from 'react';
import StockStore from '../stores/StockStore';
import StockActions from '../actions/StockActions';

export default class StockView extends Component {
  constructor() {
    super();
    this.state = {
      stock: null
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    let { symbol } = this.props.params;
    StockActions.lookUpStock(symbol);
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

  render() {
    let { stock } = this.state;
    console.log('stock:', stock);
    if(stock) {
    }
    return (
      <div className="container">
        StockView
      </div>
    )
  }
};
