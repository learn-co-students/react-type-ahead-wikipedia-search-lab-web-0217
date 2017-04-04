'use strict';

const Store = require('./Store');

class ResultStore extends Store {
  constructor(state={results: [], updated: new Date()}) {
    super(state)
  }

  isOutdated(date) {
    return this.getState().updated > date
  }


}

module.exports = new ResultStore();
