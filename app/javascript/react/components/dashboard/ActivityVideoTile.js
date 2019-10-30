import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivityVideoTile = props => {
  return(
    <div>
      <div>
        Your student uploaded a video
      </div>
      <ActivityDateTile
        date={props.date}
      />
    </div>
  )
}

export default ActivityVideoTile
