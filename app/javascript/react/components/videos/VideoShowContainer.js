import React, { useState, useEffect } from 'react'
import VideoShowTile from './VideoShowTile'

const VideoShowContainer = props => {
  let videoId = props.match.params.id

  const [personalVideo, setPersonalVideo] = useState({})
  const [videoUrl, setVideoUrl] = useState("")
  const [videoUser, setVideoUser] = useState({})
  const [videoCourse, setVideoCourse] = useState({})
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch(`/api/v1/personal_videos/${videoId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setPersonalVideo(body.personal_video)
      setVideoUrl(body.personal_video.video.url)
      setVideoUser(body.personal_video.user)
      setVideoCourse(body.personal_video.course)
      setCurrentUser(body.personal_video.current_user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div className="video-show-container">
      <div className="spacer"></div>
      <VideoShowTile
        personalVideo={personalVideo}
        videoUrl={videoUrl}
        videoUser={videoUser}
        videoCourse={videoCourse}
        currentUser={currentUser}
      />
    </div>
  )
}

export default VideoShowContainer
