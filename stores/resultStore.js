'use strict';

import Store from './Store';

class ResultStore extends Store {
  constructor(props){
    super(props)
    this.state = {
      results: [],
      updated: props.updated
    }
  }
  isOutdated(date){
    if(this.state.updated < date){
      return false
    }else{
      return true
    }
  }

}

const resultStore = new ResultStore([]);
export default resultStore;
