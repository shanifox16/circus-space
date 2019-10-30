import React from 'react'
import ActivityDateTile from './ActivityDateTile'

const ActivitySummaryTile = props => {
  return(
    <div>
      <div id="summary-name">
        You posted the "{props.title}" summary
      </div>
      <ActivityDateTile
        date={props.date}
      />
    </div>
  )
}

export default ActivitySummaryTile
