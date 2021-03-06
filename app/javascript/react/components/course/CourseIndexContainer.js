import React, { useState, useEffect } from 'react'
import CourseIndexTile from './CourseIndexTile'

const CourseIndexContainer = props => {
  const [courses, setCourses] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch(`/api/v1/courses`)
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
      setCourses(body.courses)
      setCurrentUser(body.courses[0].current_user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const courseData = courses.map(course => {
    return(
      <CourseIndexTile
        key={course.id}
        course={course}
      />
    )
  })

  return(
    <div className="course-index-container grid-x grid-margin-x">
      <div className="spacer"></div>
      {courseData}
    </div>
  )
}

export default CourseIndexContainer
