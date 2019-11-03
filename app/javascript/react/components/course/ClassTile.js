import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import SummaryTile from './SummaryTile'

const ClassTile = props => {
  const [clickedStatus, setClickedStatus] = useState(false)

  let date = props.date.split("-")
  date = `${date[1]} / ${date[2]}`

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
      <div className="class-tile cell small-12 large-4">
        <h4 className="title">{title}</h4>
        <p id="class-date" className="date">{date}</p>
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
