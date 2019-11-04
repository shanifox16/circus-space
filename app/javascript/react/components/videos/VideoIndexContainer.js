import React, { useState, useEffect } from 'react'
import VideoIndexTile from './VideoIndexTile'

const VideoIndexContainer = props => {
  const [personalVideos, setPersonalVideos] = useState([])

  useEffect(() => {
    fetch(`/api/v1/personal_videos`)
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
      setPersonalVideos(body.personal_videos)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const videoData = personalVideos.map(video => {
    return(
      <VideoIndexTile
        key={video.id}
        video={video}
        currentUser={false}
      />
    )
  })

  return(
    <div className="video-index-container text-center">
      <div className="spacer">
        <h5>Public Videos</h5>
      </div>
      <div className="grid-x">
        {videoData}
      </div>
    </div>
  )
}

export default VideoIndexContainer
