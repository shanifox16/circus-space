import React, { useState, useEffect } from 'react'
import InstructorDashboardContainer from "./InstructorDashboardContainer"
import StudentDashboardContainer from "./StudentDashboardContainer"

const DashboardContainer = props => {
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  const [notifications, setNotifications] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/api/v1/notifications')
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
      setCurrentUser(body.current_user)
      setUsers(body.users)
      setNotifications(body.notifications)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))

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
      setEvents(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  if (currentUser.role === "instructor") {
    return(
      <div>
        <InstructorDashboardContainer
          currentUser={currentUser}
          users={users}
          notifications={notifications}
          events={events}
        />
      </div>
    )
  } else {
    return(
      <div>
        <StudentDashboardContainer
          />
      </div>
    )
  }
}

export default DashboardContainer
