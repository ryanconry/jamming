import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends React.Component {
  render(){
    return(
      <div className="TrackList">{
        this.props.trackList.map(element => {
          return <Track track={element} key={element.id} onAdd={this.props.onAdd}
          onRemove={this.props.onRemove} action={this.props.action} />
        })
      }
      </div>
    );
  }
}
export default TrackList;
