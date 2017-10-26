import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {searchResults: {name: 'trackone', artist: 'artistone', album:
    'albumone'}};
    /*this.state = {searchResults: [{name: 'track_one', artist: 'artist_one',
       album: 'album_one'},{name: 'track_two', artist: 'artist_two',
       album: 'album_two'}, {name: 'track_three', artist: 'artist_three',
       album: 'album_three'}]};*/

  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
