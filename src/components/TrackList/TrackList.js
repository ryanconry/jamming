import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends React.Component {
  render(){
    return(
      <div className="TrackList">
          <div className="Track-information">
            <h3>{this.props.trackList.name} </h3>
            <p>{this.props.trackList.artist} | {this.props.trackList.album}  </p>
          </div>
      </div>
    );
  }
}
export default TrackList;
