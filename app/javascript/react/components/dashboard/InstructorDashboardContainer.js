import React from 'react'
import ActivityContainer from "./ActivityContainer"
import EventContainer from "./EventContainer"
import ButtonsContainer from "./ButtonsContainer"

const InstructorDashboardContainer = props => {
  return(
    <div className="dashboard-container grid-x grid-margin-x">
      <div className="activity-container cell small-12 medium-6 large-4">
        <ActivityContainer
          currentUser={props.currentUser}
          users={props.users}
          notifications={props.notifications}
        />
      </div>
      <div className="dashboard-squares grid-x grid-margin-x cell small-12 medium-6 large-8">
        <div className="cell top-row-squares grid-x">
          <div className="event-container top-left-square cell small-12 large-6 text-center">
            <EventContainer
              events={props.events}
              />
          </div>
          <div className="top-right-square cell small-12 large-6">
          </div>
        </div>
        <div className="cell bottom-row-squares grid-x">
          <div className="bottom-left-square cell small-12 large-6">
          </div>
          <div className="buttons-container bottom-right-square cell small-12 large-6">
            <ButtonsContainer
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDashboardContainer
