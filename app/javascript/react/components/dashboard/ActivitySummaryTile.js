import React from 'react'
import { Link } from 'react-router-dom'
import ActivityDateTile from './ActivityDateTile'

const ActivitySummaryTile = props => {
  let summaryMessage
  if (props.currentUser.role === "instructor") {
    summaryMessage =
      <div id="summary-name">
        You posted the "{props.title}" summary
      </div>
  } else {
    summaryMessage =
      <div id="summary-name">
        The "{props.title}" summary has been posted. Take a look
      </div>
  }

  return(
    <div className="activity-tile grid-x grid-margin-x">
      <i className="fa fa-2x fa-list cell-2"></i>
      <div className="summary-text">
        <Link to={`/class_summaries/${props.id}`}>{summaryMessage}</Link>
        <ActivityDateTile
          date={props.date}
          />
      </div>
    </div>
  )
}

export default ActivitySummaryTile
