import React from 'react'
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
    <div>
      <div>
        {commentUser} added a comment
      </div>
      <ActivityDateTile
        date={props.date}
      />
    </div>
  )
}

export default ActivityCommentTile
