import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivityVideoTile = props => {
  return(
    <div className="activity-tile grid-x grid-margin-x">
      <i className="fa fa-2x fa-video cell-2"></i>
      <div className="video-text">
        <div>
          Your student uploaded a video
        </div>
        <ActivityDateTile
          date={props.date}
          />
      </div>
    </div>
  )
}

export default ActivityVideoTile
