import React from 'react'
import StudentEventTile from './StudentEventTile'

const StudentEventContainer = props => {
  let eventInfo
  let eventDate
  let eventTime
  let todayString
  let todayParse
  let todayMonth
  let todayDate
  let ampm = "pm"

  let today = new Date()
  todayString = today.toDateString()
  todayParse = today.toDateString().split(" ")
  todayMonth = todayParse[1]
  todayDate = `${today.getDate()}`

  const todayEvents = props.events.map(event => {
    eventInfo = new Date(event.start.date_time)
    eventDate = eventInfo.toDateString().split(" ")
    eventDate = `${eventDate[1]} ${eventInfo.getDate()}`

    return(
      <StudentEventTile
        key={event.id}
        name={event.summary}
        eventDate={eventDate}
      />
    )
  })

  return(
    <div>
      <div className="calendar-header grid-x grid-margin-x">
        <div className="date-header cell small-3 grid-x grid-margin-x">
          <div className="cell today-month">{todayMonth}</div>
          <div className="cell today-date">{todayDate}</div>
        </div>
        <div className="today-header">
          <img src="https://circus-space-development.s3.amazonaws.com/uploads/static_images/powered_by_google.jpg" className="google-image"></img>
          <div className="schedule-word">Classes</div>
        </div>
      </div>
      <div className="calendar-data">
        {todayEvents}
      </div>
    </div>
  )
}

export default StudentEventContainer
