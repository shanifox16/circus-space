import React from 'react'
import { Link } from 'react-router-dom'

const ButtonsContainer = props => {
  let userId = props.currentUser.id

  return(
    <div className="buttons-container">
      <div className="grid-x grid-margin-x">
        <Link className="button button-top cell small-8 small-offset-2" to="/courses">Courses</Link><br />
      </div>
      <div className="grid-x grid-margin-x">
        <Link className="button cell small-8 small-offset-2" to="/personal_videos">Public Videos</Link>
      </div>
      <div className="grid-x grid-margin-x">
        <Link className="button cell small-8 small-offset-2" to={`/users/${props.currentUser.id}/personal_videos`}>My Videos</Link>
      </div>
    </div>
  )
}

export default ButtonsContainer
