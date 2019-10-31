import React from 'react'
import ActivityContainer from "./ActivityContainer"
import EventContainer from "./EventContainer"
import SubscribeTile from "./SubscribeTile"

const StudentDashboardContainer = props => {
  const addSubscriber = subscriberData => {
    props.addSubscriber(subscriberData)
  }
  return(
    <div className="dashboard-container grid-x grid-margin-x">
      <div className="activity-container cell small-12 medium-6 large-4">
        <ActivityContainer
          currentUser={props.currentUser}
          users={props.users}
          notifications={props.notifications}
        />
      </div>
      <div className="grid-x grid-margin-x cell small-12 medium-6 large-8">
        <div className="event-container cell small-12 large-6 text-center">
          <EventContainer
            student={true}
            events={props.events}
          />
        </div>
        <div className="top-image cell small-12 large-6">
        </div>
        <div className="bottom-image cell small-12 large-6">
        </div>
        <div className="buttons-container cell small-12 large-6">
          <SubscribeTile
            currentUser={props.currentUser}
            subscribers={props.subscribers}
            addSubscriber={addSubscriber}
          />
        </div>
      </div>
    </div>
  )
}

export default StudentDashboardContainer
