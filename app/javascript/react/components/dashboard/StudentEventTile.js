import React from 'react'

const StudentEventTile = props => {
  return(
    <div className="event-tile grid-x grid-margin-x">
      <div id="event-time" className="event-time cell small-3">
        {props.eventDate}
      </div>
      <div id="event-name" className="event-name cell small-9 text-left">
        {props.name}
      </div>
    </div>
  )
}

export default StudentEventTile
