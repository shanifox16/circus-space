import React from 'react'
import { Link } from 'react-router-dom'

const ClassTile = props => {
  let summaryContent = ""
  if (props.summaryPosted) {
    summaryContent =
      <video className="video-thumbnail">
        <source src={`${props.summaryVideo}`} />
      </video>
  } else {
    summaryContent = <h6>{props.summaryVideo}</h6>
  }

  return(
    <div className="class-tile cell small-12 medium-6 large-4">
      <h4>{props.name}</h4>
      <h5>{props.date}</h5>
      <div>
        {summaryContent}
      </div>
    </div>
  )
}

export default ClassTile
