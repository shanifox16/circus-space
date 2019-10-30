import React from 'react'
import VideoTile from './VideoTile'

const SummaryShowTile = props => {
  return(
    <div className="summary-show-tile grid-x grid-margin-x text-center">
      <div className="cell small-12 large-7">
        <h2 id="summary-title">{props.summary.title}</h2>
        <h4 className="summary-text" id="summary-date">{props.summary.date}</h4>
        <p id="summary-body">{props.summary.body}</p>
        <h4 className="summary-text"><strong>Homework</strong></h4>
        <p id="summary-homework">{props.summary.homework}</p>
      </div>
      <div className="cell small-12 large-5">
        <VideoTile
          video={props.video}
        />
      </div>
    </div>
  )
}

export default SummaryShowTile
