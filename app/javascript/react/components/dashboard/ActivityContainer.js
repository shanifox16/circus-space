import React from 'react'
import ActivitySummaryTile from './ActivitySummaryTile'
import ActivityCommentTile from './ActivityCommentTile'
import ActivityVideoTile from './ActivityVideoTile'
import ActivitySubscriberTile from './ActivitySubscriberTile'
import ActivityEventTile from './ActivityEventTile'

const ActivityContainer = props => {
  let eventDate
  let ampm = "pm"

  const notificationData = props.notifications.map(notification => {
    eventDate = new Date(notification.created_at)
    if (eventDate.getHours() === 24) {
      ampm = "am"
    } else if (eventDate.getHours() <= 12) {
      ampm = "am"
    } else {
      ampm = "pm"
    }
    eventDate = `${eventDate.getMonth()+1}/${eventDate.getDate()} at ${(eventDate.getHours() + 24) % 12 || 12}:${('0'+eventDate.getMinutes()).slice(-2)}${ampm}`

    if (notification.summary){
      if (props.currentUser.role === "instructor") {
        return(
          <ActivityEventTile
            key={notification.id}
            id={notification.id}
            summary={notification.summary}
            date={eventDate}
          />
        )
      }
    } else if (notification.email) {
      if (props.currentUser.role === "instructor") {
        return(
          <ActivitySubscriberTile
            key={notification.id}
            id={notification.id}
            email={notification.email}
            fname={notification.fname}
            lname={notification.lname}
            date={eventDate}
          />
        )
      }
    } else if (notification.homework) {
        return(
          <ActivitySummaryTile
            key={notification.id}
            id={notification.id}
            currentUser={props.currentUser}
            title={notification.title}
            date={eventDate}
          />
        )
    } else if (notification.video) {
      return(
        <ActivityVideoTile
          key={notification.id}
          id={notification.id}
          video={notification.video}
          date={eventDate}
          userId={notification.user_id}
          currentUser={props.currentUser}
          users={props.users}
        />
      )
    } else {
      return(
        <ActivityCommentTile
          key={notification.id}
          id={notification.id}
          body={notification.body}
          classSummary={notification.class_summary_id}
          currentUser={props.currentUser}
          users={props.users}
          userId={notification.user_id}
          date={eventDate}
        />
      )
    }
  })


  return(
    <div className="activity-container">
      <h5 className="header text-center">Activity</h5>
      {notificationData}
    </div>
  )
}

export default ActivityContainer
