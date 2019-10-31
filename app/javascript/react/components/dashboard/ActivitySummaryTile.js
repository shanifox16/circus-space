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
    <div>
      {summaryDiv}
      <ActivityDateTile
        date={props.date}
      />
    </div>
  )
}

export default ActivitySummaryTile
