'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();
  let results = [[], [], []]

  return wikipedia.search(query).then((data) => {
    if (!resultStore.isOutdated(requested)) {
      if (data) {
      let titles = data[1]
      let descriptions = data[2]
      let links = data[3]
      let resultsArray = titles.map((title, i) => {
        return {title: title, description: descriptions[i], link: links[i]}
      })
        resultStore.setState({results : resultsArray, updated: requested})
    }
  }
    return
  });
};

module.exports = { search };
