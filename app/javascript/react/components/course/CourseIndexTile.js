import React from 'react'
import { Link } from 'react-router-dom'

const CourseShowTile = props => {
  let summaryText

  const individualClasses = props.course.individual_classes.map(indiv_class => {
    let date = indiv_class.date.split("-")
    date = `${date[1]} / ${date[2]}`
    return(
      <div className="cell small-4">
        <p>{date}</p>
      </div>
    )
  })

  const students = props.course.users.map(user => {
    if (user.role === "student") {
      return(
        <div className="student grid-x align-center">
          <i className="fa fa-child"></i>
          <p className="name">{user.fname} {user.lname}</p>
        </div>
      )
    }
  })

  return (
    <div className="course-index-tile cell small-12 medium-4 large-3 text-center">
      <h5><Link to={`/courses/${props.course.id}`}>{props.course.name}</Link></h5>
      <h5 className="header">Dates:</h5>
      <div className="grid-x">
        {individualClasses}
      </div>
      <h5 className="header">Students:</h5>
      {students}
    </div>
  )
}

export default CourseShowTile
