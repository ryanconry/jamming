import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends React.Component {
  render(){
    return(
      <div className="TrackList">{
        this.props.trackList.map(element => {
          return <Track track={element} key={element.id} onAdd={this.props.onAdd} />
        })
      }
      </div>
    );
  }
}
export default TrackList;
