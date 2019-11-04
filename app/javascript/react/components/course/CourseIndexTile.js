import React from 'react'
import { Link } from 'react-router-dom'

const CourseShowTile = props => {
  let summaryText

  const individualClasses = props.course.individual_classes.map(indiv_class => {
    if (indiv_class.class_summary != null) {
      summaryText = " - Summary posted"
    } else {
      summaryText = ""
    }
    return(
      <div>
        <p>{indiv_class.date}{summaryText}</p>
      </div>
    )
  })

  const students = props.course.users.map(user => {
    if (user.role === "student") {
      return(
        <div>
          <p>{user.fname} {user.lname}</p>
        </div>
      )
    }
  })

  return (
    <div className="course-index-tile cell small-12 medium-6 large-4">
      <h5><Link to={`/courses/${props.course.id}`}>{props.course.name}</Link></h5>
      <p>Dates:</p>
      {individualClasses}
      <p>Students:</p>
      {students}
    </div>
  )
}

export default CourseShowTile
