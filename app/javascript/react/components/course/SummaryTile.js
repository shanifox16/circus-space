import React from 'react'

const SummaryTile = props => {

  let summaryContent = ""

  const handleVideoClick = () => {
    props.redirectSummary()
  }

  if (props.summaryPosted) {
    summaryContent =
      <video src={`${props.summaryVideo}`} className="video-thumbnail" id="video-thumbnail" onClick={handleVideoClick}>
      </video>
  } else {
    summaryContent = <h6 className="summary-text">{props.summaryVideo}</h6>
  }

  return(
    <div className="summary-content">
      {summaryContent}
    </div>
  )
}

export default SummaryTile
