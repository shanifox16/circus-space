import React, { useState, useEffect } from 'react'
import InstructorDashboardContainer from "./InstructorDashboardContainer"
import StudentDashboardContainer from "./StudentDashboardContainer"

const DashboardContainer = props => {
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  const [notifications, setNotifications] = useState([])
  const [events, setEvents] = useState([])
  const [subscribers, setSubscribers] = useState([])

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

    fetch('/api/v1/subscribers')
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
      setSubscribers(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const addSubscriber = subscriberData => {
    fetch('/api/v1/subscribers', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(subscriberData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setSubscribers([...subscribers, body])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

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
          currentUser={currentUser}
          users={users}
          notifications={notifications}
          events={events}
          subscribers={subscribers}
          addSubscriber={addSubscriber}
        />
      </div>
    )
  }
}

export default DashboardContainer
