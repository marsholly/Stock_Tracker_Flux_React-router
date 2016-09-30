import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveCompanies(companies) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_COMPANIES',
      payload: { companies }
    })
  },
  receiveStock(stock) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCK',
      payload: { stock }
    })
  }
}

export default ServerActions;
