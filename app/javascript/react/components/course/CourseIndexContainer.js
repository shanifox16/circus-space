import React, { useState, useEffect } from 'react'
import CourseIndexTile from './CourseIndexTile'

const CourseIndexContainer = props => {
  const [courses, setCourses] = useState([])

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
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const courseData = courses.map(course => {
    return(
      <CourseIndexTile
        course={course}
      />
    )
  })

  return(
    <div className="course-index grid-x grid-margin-x">
      {courseData}
    </div>
  )
}

export default CourseIndexContainer
