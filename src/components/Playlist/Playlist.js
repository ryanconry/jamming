import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  render(){
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList trackList={this.props.playlistTracks}
        onRemove={this.props.onRemove} action={this.props.action}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
export default Playlist;
