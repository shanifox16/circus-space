import React from 'react'

const ClassTile = props => {
  return(
    <div className="class-tile cell small-12 medium-6 large-4">
      <h4>{props.name}</h4>
      <h6>{props.date}</h6>
      <h5 className="summary-video">{props.summaryVideo}</h5>
    </div>
  )
}

export default ClassTile
