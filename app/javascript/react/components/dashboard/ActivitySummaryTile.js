import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivitySummaryTile = props => {
  let summaryDiv
  if (props.currentUser.role === "instructor") {
    summaryDiv =
      <div id="summary-name">
        You posted the "{props.title}" summary
      </div>
  } else {
    summaryDiv =
      <div id="summary-name">
        The "{props.title}" summary has been posted. Take a look
      </div>
  }

  return(
    <div className="activity-tile grid-x grid-margin-x">
      <i className="fa fa-2x fa-list cell-2"></i>
      <div className="summary-text">
        <div>
          {summaryDiv}
        </div>
        <ActivityDateTile
          date={props.date}
          />
      </div>
    </div>
  )
}

export default ActivitySummaryTile
