import React from 'react'

const CourseShowTile = props => {
  const individualClasses = props.course.individual_classes.map(indiv_class => {
    return(
      <div>
        <p>{indiv_class.date}</p>
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
      <p>{props.course.name}</p>
      <p>Dates:</p>
      {individualClasses}
      <p>Students:</p>
      {students}
    </div>
  )
}

export default CourseShowTile
