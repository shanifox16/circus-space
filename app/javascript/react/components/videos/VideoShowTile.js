import React, { useState } from 'react'

const VideoShowTile = props => {
  const [certifyStatus, setCertifyStatus] = useState(props.personalVideo.certified)

  let instructorData

  const handleCheck = event => {
    event.preventDefault()
    fetch(`/api/v1/personal_videos/${props.personalVideo.id}`, {
      credentials: "same-origin",
      method: 'PATCH',
      body: JSON.stringify(true),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.personal_video) {
        setCertifyStatus(body.personal_video.certified)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const handleX = event => {
    event.preventDefault()
    fetch(`/api/v1/personal_videos/${props.personalVideo.id}`, {
      credentials: "same-origin",
      method: 'PATCH',
      body: JSON.stringify(false),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.personal_video) {
        setCertifyStatus(body.personal_video.certified)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  let publicIcon = <i id="public-icon" className="fa fa-times"></i>
  let certifiedIcon
  if (props.personalVideo.public) {
    publicIcon = <i id="public-icon" className="fa fa-check"></i>
  }
  if (certifyStatus) {
    certifiedIcon = <i id="certified-icon" className="fa fa-check"></i>
  } else if (certifyStatus === false) {
    certifiedIcon = <i id="certified-icon" className="fa fa-times"></i>
  } else {
    if (props.personalVideo.certified) {
      certifiedIcon = <i id="certified-icon" className="fa fa-check"></i>
    } else {
      certifiedIcon = <i id="certified-icon" className="fa fa-times"></i>
    }
  }
  if (props.currentUser.role === "instructor") {
    instructorData = <p className="instructor-certify">
      Safe to train?
      <i className="fa fa-2x fa-check" onClick={handleCheck}></i>
      <i className="fa fa-2x fa-times" onClick={handleX}></i>
    </p>
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
            {instructorData}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoShowTile
