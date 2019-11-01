import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import Dropzone from 'react-dropzone'
import _ from "lodash"
import ErrorList from "../ErrorList"

const SummaryForm = props => {
  const [errors, setErrors] = useState({})
  const [redirectNumber, setRedirectNumber] = useState(null)
  const [uploadedFile, setUploadedFile] = useState([])
  const [message, setMessage] = useState("")
  const [summaryFields, setSummaryFields] = useState({
    title: "",
    body: "",
    homework: "",
    video: ""
  })

  let individualClassId = props.match.params.id

  const handleInputChange = event => {
    setSummaryFields({
      ...summaryFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const onDrop = (file) => {
    if(file.length == 1) {
      setUploadedFile(file)
    } else {
      setMessage("You can only upload 1 video per summary")
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}

    const requiredFields = ["title", "body", "homework"]

    requiredFields.forEach(field => {
      if(summaryFields[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      let submittedFields = new FormData()
      submittedFields.append("title", summaryFields.title)
      submittedFields.append("body", summaryFields.body)
      submittedFields.append("homework", summaryFields.homework)
      submittedFields.append("video", uploadedFile[0])

      fetch(`/api/v1/individual_classes/${individualClassId}/class_summaries`, {
        credentials: "same-origin",
        method: 'POST',
        body: submittedFields
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
        if (body.class_summary.id) {
          setRedirectNumber(body.class_summary.id)
        } else {
          setErrors(body.errors)
          setSummaryFields(body.fields)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))

      setSummaryFields({
        title: "",
        body: "",
        homework: "",
        video: ""
      })
    }
  }

  if (redirectNumber) {
    return <Redirect to={`/class_summaries/${redirectNumber}`} />
  }

  return(
    <div className="grid-container summary-form">
      <div className="spacer"></div>
      <form onSubmit={handleSubmit}>
        <h2 className="form-header text-center">Class Summary</h2>
        <ErrorList
          errors={errors}
        />
        <label htmlFor="title">Title:
          <input
            type="text"
            id="title"
            value={summaryFields.title}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="body">Summary:
          <input
            type="text"
            id="body"
            value={summaryFields.body}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="homework">Homework:
          <input
            type="text"
            id="homework"
            value={summaryFields.homework}
            onChange={handleInputChange}
          />
        </label>

        <section>
          <div className="dropzone">
            <Dropzone
              className="video-uploads"
              multiple={false}
              onDrop={file => onDrop(file)}
            >
              {({getRootProps, getInputProps}) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Click to upload video / Drop your video here</p>
                  </div>
              )}
            </Dropzone>
          </div>
          <aside>
            <ul>
              {
                uploadedFile.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>
        <div className="grid-x grid-margin-x">
          <input type="submit" class="submit-button cell small-4 small-offset-4" value="Post Summary" />
        </div>
      </form>
    </div>
  )
}

export default SummaryForm
