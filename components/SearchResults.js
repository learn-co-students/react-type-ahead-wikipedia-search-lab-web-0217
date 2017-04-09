'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  <ul className="search-results">
    {results.map((result) => {
      return (<li>
        <a href={result.link}>{result.title}</a>
        <p>
          {result.description}
        </p>
      </li>)
    })}
  </ul>
);

export default SearchResults;
