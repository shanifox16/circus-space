import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivityEventTile = props => {
  return(
    <div className="activity-tile grid-x grid-margin-x">
      <i className="fa fa-2x fa-heartbeat cell-2"></i>
      <div className="event-text">
        <div id="event-name">
          You taught {props.summary}. Post a summary
        </div>
        <ActivityDateTile
          date={props.date}
          />
      </div>
    </div>
  )
}

export default ActivityEventTile
