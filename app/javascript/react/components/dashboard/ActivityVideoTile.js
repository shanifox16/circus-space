import React from 'react'
import { Link } from 'react-router-dom'
import ActivityDateTile from './ActivityDateTile'

const ActivityVideoTile = props => {
  let videoUser
  props.users.forEach(user => {
    if (props.userId === props.currentUser.id) {
      videoUser = "You"
    } else if (props.userId === user.id) {
      videoUser = user.fname
    }
  })
  return(
    <div className="activity-tile grid-x grid-margin-x">
      <i className="fa fa-2x fa-video-camera cell-2"></i>
      <div className="video-text">
        <Link to={`/personal_videos/${props.id}`}>{videoUser} uploaded a video</Link>
        <ActivityDateTile
          date={props.date}
          />
      </div>
    </div>
  )
}

export default ActivityVideoTile
