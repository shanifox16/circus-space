import React from 'react'

const SummaryCommentsTile = props => {

  return(
      <div className={`comment-tile ${props.userClass}`} id="comment-tile">
        <h6 className="comment-header" id="comment-header">{props.user.fname} ({props.comment.created_at}):</h6>
        <div className="comment-body">
          <p id="comment-body">{props.comment.body}</p>
        </div>
      </div>
  )
}

export default SummaryCommentsTile
