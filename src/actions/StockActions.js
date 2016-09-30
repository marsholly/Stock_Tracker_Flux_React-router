import API from '../API';

const StockActions = {
  lookUpCompany(symbol) {
    API.lookUpCompany(symbol)
  },
  lookUpStock(symbol) {
    API.lookUpStock(symbol)
  }
}

export default StockActions;
