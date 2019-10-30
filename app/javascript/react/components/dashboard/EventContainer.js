import React from 'react'
import EventTile from './EventTile'

const EventContainer = props => {
  let eventInfo
  let eventDate
  let eventTime
  let todayString
  let tomorrowString
  let todayFormatted
  let tomorrowFormatted
  let ampm = "pm"

  let today = new Date()
  todayString = today.toDateString()
  todayFormatted = `${today.getMonth()+1}/${today.getDate()}`
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrowString = tomorrow.toDateString()
  tomorrowFormatted = `${tomorrow.getMonth()+1}/${tomorrow.getDate()}`

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

  const tomorrowEvents = props.events.map(event => {
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

    if (eventDate === tomorrowString) {
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
      <h6 className="day-header">Today, {todayFormatted}</h6>
      <div>
        {todayEvents}
      </div>
      <h6 className="day-header">Tomorrow, {tomorrowFormatted}</h6>
      <div>
        {tomorrowEvents}
      </div>
    </div>
  )
}

export default EventContainer