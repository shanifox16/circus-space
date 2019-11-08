import React, { useState, useEffect } from 'react'
import InstructorDashboardContainer from "./InstructorDashboardContainer"
import StudentDashboardContainer from "./StudentDashboardContainer"
import fetchSubscribers from "../pojos/fetchSubscribers"
import fetchEvents from "../pojos/fetchEvents"
import fetchNotifications from "../pojos/fetchNotifications"

const DashboardContainer = props => {
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  const [notifications, setNotifications] = useState([])
  const [events, setEvents] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    fetchNotifications().then(body => {
      setCurrentUser(body.current_user)
      setUsers(body.users)
      setNotifications(body.notifications)
      setActivityData(body.activity_data)
    })

    fetchEvents().then(body => {
      setEvents(body)
    })

    fetchSubscribers().then(body => {
      setSubscribers(body)
    })
  }, [])

  if (currentUser.role === "instructor") {
    return(
      <div>
        <InstructorDashboardContainer
          currentUser={currentUser}
          users={users}
          notifications={notifications}
          events={events}
          activityData={activityData}
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
        />
      </div>
    )
  }
}

export default DashboardContainer
