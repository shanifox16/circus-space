import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivityEventTile = props => {
  return(
    <div>
      <div id="event-name">
        You taught {props.summary}. Post a summary
      </div>
      <ActivityDateTile
        date={props.date}
      />
    </div>
  )
}

export default ActivityEventTile
