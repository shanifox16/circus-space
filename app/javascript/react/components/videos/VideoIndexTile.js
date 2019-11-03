import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const VideoIndexTile = props => {
  const [clickedStatus, setClickedStatus] = useState(false)

  let certifiedIcon = <i id="certified-icon" className="fa fa-times"></i>
  if (props.video.certified) {
    certifiedIcon = <i id="certified-icon" className="fa fa-check"></i>
  }

  const handleClick = event => {
    event.preventDefault()
    setClickedStatus(true)
  }

  if (clickedStatus) {
    return( <Redirect to={`/personal_videos/${props.video.id}`}/> )
  } else {
    return(
      <div className="video-index-tile">
        <h5 id="title">{props.video.title}</h5>
        <h5 id="course-name">{props.video.course.name}</h5>
        <p className="video-certified">Instructor Certified? {certifiedIcon}</p>
        <video src={`${props.video.video.url}`} className="video-tile" id="video-tile" onClick={handleClick}>
        </video>
      </div>
    )
  }
}

export default VideoIndexTile
