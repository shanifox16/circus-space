import React from 'react'

const VideoShowTile = props => {
  let publicIcon = <i id="public-icon" className="fa fa-times"></i>
  let certifiedIcon = <i id="certified-icon" className="fa fa-times"></i>
  if (props.personalVideo.public) {
    publicIcon = <i id="public-icon" className="fa fa-check"></i>
  }
  if (props.personalVideo.certified) {
    certifiedIcon = <i id="certified-icon" className="fa fa-check"></i>
  }

  return(
    <div className="video-show-tile">
      <div className="video-background grid-x grid-margin-x text-center">
        <div className="cell small-12 medium-5 medium-offset-1">
          <video src={`${props.videoUrl}`} className="video-tile" controls>
          </video>
        </div>
        <div className="video-data cell small-12 medium-5">
          <h6 className="video-header">Title:</h6>
          <p className="video-title">{props.personalVideo.title}</p>
          <hr />
          <h6 className="video-header">Uploaded by:</h6>
          <p className="video-user">{props.videoUser.fname} {props.videoUser.lname}</p>
          <hr />
          <h6 className="video-header">Learned in:</h6>
          <p className="video-course">{props.videoCourse.name}</p>
          <hr />
          <h6 className="video-header">Description:</h6>
          <p className="video-body">{props.personalVideo.body}</p>
          <hr />
          <div className="booleans">
            <p className="video-public">Public? {publicIcon}</p>
            <p className="video-certified">Certified by instructor? {certifiedIcon}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoShowTile
