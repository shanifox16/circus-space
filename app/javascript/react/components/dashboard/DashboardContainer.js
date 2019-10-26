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
      // debugger
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
