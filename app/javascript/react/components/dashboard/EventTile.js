import React from 'react'

const EventTile = props => {
  return(
    <div>
      <p>{props.name} at {props.eventTime}</p>
    </div>
  )
}

export default EventTile
