import React from 'react'
import { Link } from 'react-router-dom'
import ActivityDateTile from './ActivityDateTile'

const ActivityCommentTile = props => {
  let commentUser
  props.users.forEach(user => {
    if (props.userId === props.currentUser.id) {
      commentUser = "You"
    } else if (props.userId === user.id) {
      commentUser = user.fname
    }
  })

  return(
    <div className="activity-tile grid-x grid-margin-x">
      <i className="fa fa-2x fa-comments cell-2"></i>
      <div className="cell-10 comment-text">
        <Link to={`/class_summaries/${props.classSummary}`}>{commentUser} added a comment</Link>
        <ActivityDateTile
          date={props.date}
          />
      </div>
    </div>
  )
}

export default ActivityCommentTile
