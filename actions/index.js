'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();


  return wikipedia.search(query).then((data) => {
    if (!resultStore.isOutdated(requested)) {
      if (data) {
        let titles = data[1]
        let descriptions = data[2]
        let links = data[3]
        let resultArray =  titles.map((title, i) => {
          return {title: title, description: descriptions[i], link: links[i]}
        })
        resultStore.setState({results: resultArray, updated: requested})
      }
    }
  });
};

module.exports = { search };
