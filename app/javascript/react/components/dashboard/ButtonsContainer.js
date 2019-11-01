import React from 'react'
import { Link } from 'react-router-dom'

const ButtonsContainer = props => {
  return(
    <div className="buttons-container">
      <div className="grid-x grid-margin-x">
        <Link className="button button-top cell small-8 small-offset-2" to="/">Courses</Link><br />
      </div>
      <div className="grid-x grid-margin-x">
        <Link className="button cell small-8 small-offset-2" to="/">Newsletter</Link>
      </div>
    </div>
  )
}

export default ButtonsContainer
