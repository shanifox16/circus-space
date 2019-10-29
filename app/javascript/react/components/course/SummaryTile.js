import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

const SummaryTile = props => {

  let summaryContent = ""

  const handleVideoClick = () => {
    props.redirectSummary()
  }

  if (props.summaryPosted) {
    summaryContent =
      <video className="video-thumbnail" id="video-thumbnail" onClick={handleVideoClick}>
        <source src={`${props.summaryVideo}`} />
      </video>
  } else {
    summaryContent = <h6>{props.summaryVideo}</h6>
  }

  return(
    <div>
      {summaryContent}
    </div>
  )
}

export default SummaryTile
