import React from 'react'
import StudentTile from './StudentTile'

const CourseShowTile = props => {
  let instructor = ""
  let students = []

  if (props.course.users) {
    const userData = props.course.users.map(user => {
      if (user.role === "instructor") {
        instructor = `${user.fname} ${user.lname}`
      } else if (user.role === "student") {
        students.push(user)
      }
    })
  }

  const studentData = students.map(student => {
    return(
      <StudentTile
        key={student.id}
        firstName={student.fname}
        lastName={student.lname}
      />
    )
  })

  return (
    <div className="course-show-tile">
      <h6 id="course-name">{props.course.name}</h6>
      <p id="course-description">{props.course.description}</p>
      <h6>Instructor</h6>
      <p>{instructor}</p>
      <h6>Students</h6>
      {studentData}
    </div>
  )
}

export default CourseShowTile
