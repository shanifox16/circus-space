import React from 'react'
import { Link } from 'react-router-dom'
import ClassTile from './ClassTile'

const ClassIndexContainer = props => {
  let summaryPosted = false
  let summaryTitle = ""

  const classDetails = props.individualClasses.map(individualClass => {
    let summaryVideo = "Summary will be posted after class"
    if (individualClass.class_summary) {
      summaryVideo = individualClass.class_summary.video.url
      summaryTitle = individualClass.class_summary.title
      summaryPosted = true
    } else if (props.currentUser.role === "instructor") {
      summaryVideo = <Link to={`/individual_classes/${individualClass.id}/class_summaries/new`}>Add Class Summary</Link>
      summaryTitle = individualClass.name
      summaryPosted = false
    } else {
      summaryTitle = individualClass.name
      summaryPosted = false
    }
    return(
      <ClassTile
        key={individualClass.id}
        id={individualClass.id}
        name={individualClass.name}
        date={individualClass.date}
        summaryTitle={summaryTitle}
        summaryVideo={summaryVideo}
        summaryPosted={summaryPosted}
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
