import React from 'react'

const StudentTile = props => {
  return(
    <li className="student">
      <i className="fa fa-child"></i>
      {props.firstName} {props.lastName}
    </li>
  )
}

export default StudentTile
