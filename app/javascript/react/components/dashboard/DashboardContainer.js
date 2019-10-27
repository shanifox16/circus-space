import React, { useState, useEffect } from 'react'

const DashboardContainer = props => {

  useEffect(() => {
    fetch('/api/v1/events')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      // This is working
      // Currently sending the next 10 calendar events
      // Change to send all events for the next few days/week
      // Decide where to print in React/move this fetch to the appropriate place
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div>
      Hello from Dashboard Container
    </div>
  )
}

export default DashboardContainer
