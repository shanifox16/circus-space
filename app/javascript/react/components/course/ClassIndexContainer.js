import React from 'react'
import ClassTile from './ClassTile'

const ClassIndexContainer = props => {
  const classDetails = props.individualClasses.map(individualClass => {
    let summaryVideo = "Summary will be posted after class"
    if (individualClass.class_summary) {
      summaryVideo = individualClass.class_summary.video.url
    }
    return(
      <ClassTile
        key={individualClass.id}
        name={individualClass.name}
        date={individualClass.date}
        summaryVideo={summaryVideo}
      />
    )
  })

  return(
    <div className="class-index-container grid-x grid-margin-x">
      {classDetails}
    </div>
  )
}

export default ClassIndexContainer
