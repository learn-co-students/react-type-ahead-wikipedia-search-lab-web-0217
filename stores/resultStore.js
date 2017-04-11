'use strict';

import Store from './Store';

class ResultStore extends Store {
  constructor(state={results: [], updated: new Date()}) {
    super(state)
  }

  isOutdated(date) {
    return this.getState().updated > date
  }
}

const resultStore = new ResultStore();

export default resultStore;
