import React from 'react'
import { Link } from 'react-router-dom'

const VideoButtonsContainer = props => {
  let userId = props.currentUser.id

  return(
    <div className="video-buttons-container">
      <div className="grid-x grid-margin-x">
        <Link className="button button-top cell small-6 small-offset-3" to="/personal_videos">Public Videos</Link>
      </div>
      <div className="grid-x grid-margin-x">
        <Link className="button cell small-6 small-offset-3" to={`/users/${props.currentUser.id}/personal_videos`}>My Videos</Link>
      </div>
      <div className="grid-x grid-margin-x">
        <Link className="button cell small-6 small-offset-3" to="/personal_videos/new">Post Video</Link><br />
      </div>
    </div>
  )
}

export default VideoButtonsContainer
