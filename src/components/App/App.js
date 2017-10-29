import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {searchResults: [{name: 'track_one', artist: 'artist_one',
       album: 'album_one'},{name: 'track_two', artist: 'artist_two',
       album: 'album_two'}, {name: 'track_three', artist: 'artist_three',
       album: 'album_three'}], playlistName: 'test playlist', playlistTracks:
     [{name: 'track_one', artist: 'artist_one',
      album: 'album_one'},{name: 'track_three', artist: 'artist_three',
      album: 'album_three'}]};
      this.addTrack = this.addTrack.bind(this)
    }

      addTrack(track){
        tracks=this.state.playlistTracks;
        tracks.forEach(element=>{
          if(element.id === track.id){
            return;
          }
        });
        tracks.push(track);
        this.setState({playlistTracks: tracks});
      }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
             onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks=
            {this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
