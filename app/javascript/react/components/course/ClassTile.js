import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import SummaryTile from './SummaryTile'

const ClassTile = props => {
  const [clickedStatus, setClickedStatus] = useState(false)

  let title = props.name
  if (props.summaryPosted) {
    title = props.summaryTitle
  }

  const redirectSummary = () => {
    setClickedStatus(true)
  }

  if (clickedStatus) {
    return <Redirect to={`/class_summaries/${props.summaryId}`} />
  } else {
    return(
      <div className="class-tile cell small-12 medium-6 large-4">
        <h4>{title}</h4>
        <h5>{props.date}</h5>
        <SummaryTile
          classId={props.id}
          summaryPosted={props.summaryPosted}
          summaryVideo={props.summaryVideo}
          redirectSummary={redirectSummary}
        />
      </div>
    )
  }
}

export default ClassTile
