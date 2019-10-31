import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivitySubscriberTile = props => {
  return(
    <div className="activity-tile grid-x grid-margin-x">
      <i className="fa fa-2x fa-paper-plane cell-2"></i>
      <div className="subscriber-text">
        <div id="subscriber-name">
          {props.fname} {props.lname} subscribed to your newsletter
        </div>
        <ActivityDateTile
          date={props.date}
          />
      </div>
    </div>
  )
}

export default ActivitySubscriberTile
