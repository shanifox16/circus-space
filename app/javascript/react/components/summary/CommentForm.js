import React from 'react'

const CommentForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    if (props.commentFields.body != "") {
      props.handleCommentSubmit(props.commentFields)
      props.setCommentFields({
        body: ""
      })
    }
  }

  return(
    <form className="comment-form grid-y grid-margin-x" onSubmit={handleSubmit}>
      <textarea
        className="input-field"
        type="text"
        id="body"
        value={props.commentFields.body}
        onChange={props.handleInputChange}
      />
    <input className="submit-button" id="submit" type="submit" value="Post" />
    </form>
  )
}

export default CommentForm
