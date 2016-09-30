import ServerActions from './actions/ServerActions';
import jsonp from 'jsonp';

const API = {
  lookUpCompany(symbol) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${symbol}`, (err, companies) => {
      if(err) return console.log('err:', err);
      ServerActions.receiveCompanies(companies);
    })
  },
  lookUpStock(symbol) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`, (err, stock) => {
      if(err) return console.log('err:', err);
      ServerActions.receiveStock(stock);
    })
  }
}

export default API;
