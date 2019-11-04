import React from 'react'
import ActivityContainer from "./ActivityContainer"
import EventContainer from "./EventContainer"
import ButtonsContainer from "./ButtonsContainer"
import VideoButtonsContainer from "./VideoButtonsContainer"

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
          <div className="top-left-square cell small-12 large-4">
          </div>
          <div className="event-container top-middle-square cell small-12 large-4 text-center">
            <EventContainer
              events={props.events}
              />
          </div>
          <div className="top-right-square cell small-12 large-4">
          </div>
        </div>
        <div className="cell bottom-row-squares grid-x">
          <div className="bottom-left-square video-buttons-container cell small-12 large-4">
            <VideoButtonsContainer
              currentUser={props.currentUser}
            />
          </div>
          <div className="bottom-middle-square cell small-12 large-4">
          </div>
          <div className="buttons-container bottom-right-square cell small-12 large-4">
            <ButtonsContainer
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDashboardContainer
