import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
  render(){
    return(
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList trackList={this.props.searchResults} onAdd={this.props.onAdd}
        action={this.props.action}/>
      </div>
    );
  }
}
export default SearchResults;
