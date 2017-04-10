'use strict'

import React from 'react';
import actions from '../actions';
import resultStore from '../stores/resultStore';

import SearchField from './SearchField';
import SearchResults from './SearchResults';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: resultStore.getState().results,
      query: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      query: event.target.value
    })
    actions.search(event.target.value)
  }

  componentDidMount(){
    this.removeListener = resultStore.addListener((search)=>{
      this.setState({
        results: search.results
      })
    })
  }

  componentWillUnmount(){
    this.removeListener()
  }

  render() {
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query} onChange={this.handleChange}>
          <SearchResults results={this.state.results} />
        </SearchField>
      </div>
    );
  }
}

export default Autocomplete;
