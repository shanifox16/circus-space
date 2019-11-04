import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const VideoIndexTile = props => {
  const [clickedStatus, setClickedStatus] = useState(false)

  const deleteVideo = event => {
    event.preventDefault()
    props.submitDeleteVideo(props.video.id)
  }

  let deleteButton
  if (props.currentUser) {
    deleteButton = <i className="fa fa-times delete-icon" onClick={deleteVideo}></i>
  }

  let certifiedIcon = <i id="certified-icon" className="fa fa-times fa-times-red"></i>
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
        {deleteButton}
        <div className="text-center">
          <h5 id="title" className={`title-${props.currentUser}`}>{props.video.title}</h5>
          <h5 id="course-name">{props.video.course.name}</h5>
          <p className="video-certified">Instructor Certified? {certifiedIcon}</p>
          <video src={`${props.video.video.url}`} className="video-tile" id="video-tile" onClick={handleClick}>
          </video>
        </div>
      </div>
    )
  }
}

export default VideoIndexTile
