import React from 'react'

const StudentEventTile = props => {
  return(
    <div>
      <p>{props.eventDate}: {props.name} at {props.eventTime}</p>
    </div>
  )
}

export default StudentEventTile
