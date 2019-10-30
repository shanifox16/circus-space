import React from 'react'

const VideoTile = props => {
  return(
    <video src={`${props.video}`} className="video-tile" controls>
    </video>
  )
}

export default VideoTile
