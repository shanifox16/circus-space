import React, { useState, useEffect } from 'react'
import SummaryShowTile from './SummaryShowTile'
import SummaryCommentsTile from './SummaryCommentsTile'
import CommentForm from './CommentForm'

const SummaryShowContainer = props => {
  const [summary, setSummary] = useState({})
  const [video, setVideo] = useState("")
  const [comments, setComments] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [commentFields, setCommentFields] = useState({
    body: ""
  })

  let userClass = "student"
  let summaryId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/class_summaries/${summaryId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setSummary(body.class_summary)
      setVideo(body.class_summary.video.url)
      setComments(body.class_summary.summary_comments)
      setCurrentUser(body.class_summary.current_user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const commentsData = comments.map(comment => {
    if (comment.user.id === currentUser.id) {
      userClass = "current-user"
    } else if (comment.user.role === "instructor") {
      userClass = "instructor"
    } else {
      userClass = "student"
    }

    return(
      <SummaryCommentsTile
        key={comment.id}
        comment={comment}
        user={comment.user}
        userClass={userClass}
      />
    )
  })

  const handleInputChange = event => {
    setCommentFields({
      ...commentFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleCommentSubmit = commentPayload => {
    fetch(`/api/v1/class_summaries/${summaryId}/summary_comments`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(commentPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.summary_comment.id) {
        setComments([...comments, body.summary_comment])
      } else {
        setCommentFields(body.fields)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return(
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 large-9">
        <SummaryShowTile
          summary={summary}
          video={video}
        />
      </div>
      <div className="cell small-12 large-3 summary-comments-tile">
        {commentsData}
        <CommentForm
          commentFields={commentFields}
          setCommentFields={setCommentFields}
          handleCommentSubmit={handleCommentSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default SummaryShowContainer
