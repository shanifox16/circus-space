import React from 'react'
import EventTile from './EventTile'
import StudentEventTile from './StudentEventTile'

const EventContainer = props => {
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
    eventDate = eventInfo.toDateString()
    if (eventInfo.getHours() === 24) {
      ampm = "am"
    } else if (eventInfo.getHours() <= 12) {
      ampm = "am"
    } else {
      ampm = "pm"
    }
    eventTime = `${(eventInfo.getHours() + 24) % 12 || 12}:${('0'+eventInfo.getMinutes()).slice(-2)}${ampm}`

    if (eventDate === todayString) {
      return(
        <EventTile
          key={event.id}
          name={event.summary}
          eventTime={eventTime}
        />
      )
    }
  })

  return(
    <div>
      <div className="calendar-header grid-x grid-margin-x">
        <div className="date-header cell small-3 grid-x grid-margin-x">
          <div className="cell today-month">{todayMonth}</div>
          <div className="cell today-date">{todayDate}</div>
        </div>
        <div className="today-header">
          <img src="/assets/powered_by_google.jpg" className="google-image"></img>
          <div className="today-word">Today</div>
        </div>
      </div>
      <div className="calendar-data">
        {todayEvents}
      </div>
    </div>
  )
}

export default EventContainer
