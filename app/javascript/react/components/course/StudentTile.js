import React from 'react'

const StudentTile = props => {
  return(
    <li>
      {props.firstName} {props.lastName}
    </li>
  )
}

export default StudentTile
