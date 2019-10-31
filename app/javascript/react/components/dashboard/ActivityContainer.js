import React from 'react'
import ActivitySummaryTile from './ActivitySummaryTile'
import ActivityCommentTile from './ActivityCommentTile'
import ActivityVideoTile from './ActivityVideoTile'
import ActivitySubscriberTile from './ActivitySubscriberTile'
import ActivityEventTile from './ActivityEventTile'

const ActivityContainer = props => {
  let eventDate
  let today = new Date()

  const notificationData = props.notifications.map(notification => {
    if (notification.summary){
      if (props.currentUser.role === "instructor") {
        return(
          <ActivityEventTile
            key={notification.id}
            id={notification.id}
            summary={notification.summary}
            date={notification.created_at}
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
            date={notification.created_at}
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
            date={notification.created_at}
          />
        )
    } else if (notification.video) {
      return(
        <ActivityVideoTile
          key={notification.id}
          id={notification.id}
          video={notification.video}
          date={notification.created_at}
        />
      )
    } else {
      return(
        <ActivityCommentTile
          key={notification.id}
          id={notification.id}
          body={notification.body}
          currentUser={props.currentUser}
          users={props.users}
          userId={notification.user_id}
          date={notification.created_at}
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
