import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _companies = null;
let _stock = null;

class StockStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_COMPANIES':
          let { companies } = action.payload;
          _companies = companies;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_STOCK':
          let _stock = action.payload.stock;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getCompanies() {
    return _companies;
  }

  getStock() {
    return _stock;
  }
}

export default new StockStore();
