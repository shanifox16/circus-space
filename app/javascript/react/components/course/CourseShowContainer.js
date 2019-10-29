import React, { useState, useEffect } from 'react'
import CourseShowTile from './CourseShowTile'
import ClassIndexContainer from './ClassIndexContainer'

const CourseShowContainer = props => {
  const [course, setCourse] = useState({})
  const [individualClasses, setIndividualClasses] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  let courseId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/courses/${courseId}`)
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
      setCourse(body.course)
      setIndividualClasses(body.course.individual_classes)
      setCurrentUser(body.course.current_user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div className="course-show text-center">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-4 large-3">
          <CourseShowTile
            course={course}
          />
        </div>
        <div className="cell small-12 medium-8 large-9 grid-container">
          <div className="grid-x grid-margin-x">
            <ClassIndexContainer
              course={course}
              individualClasses={individualClasses}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseShowContainer
