import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivitySubscriberTile = props => {
  return(
    <div>
      <div id="subscriber-name">
        {props.fname} {props.lname} subscribed to your newsletter
      </div>
      <ActivityDateTile
        date={props.date}
      />
    </div>
  )
}

export default ActivitySubscriberTile
