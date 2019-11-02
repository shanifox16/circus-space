import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import Dropzone from 'react-dropzone'
import _ from "lodash"
import ErrorList from "../ErrorList"

const VideoForm = props => {
  let courseNames = {}

  const [errors, setErrors] = useState({})
  const [redirectNumber, setRedirectNumber] = useState(null)
  const [courses, setCourses] = useState([])
  const [uploadedFile, setUploadedFile] = useState([])
  const [message, setMessage] = useState("")
  const [videoFields, setVideoFields] = useState({
    title: "",
    body: "",
    public: false,
    course: ""
  })

  useEffect(() => {
    fetch(`/api/v1/personal_videos/new`)
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
      setCourses(body.courses)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  courses.forEach(course => {
    courseNames[`${course.name}`] = course.id
  })
  let courseOptions = Object.keys(courseNames)
  const courseArray = [""].concat(courseOptions).map(course => {
    return(
      <option key={courseNames[course]} value={courseNames[course]}>
        {course}
      </option>
    )
  })

  const handleInputChange = event => {
    if (event.currentTarget.id === "public") {
      if (videoFields.public === false) {
        setVideoFields({
          ...videoFields,
          public: true
        })
      } else {
        setVideoFields({
          ...videoFields,
          public: false
        })
      }
    } else {
      setVideoFields({
        ...videoFields,
        [event.currentTarget.id]: event.currentTarget.value
      })
    }
  }

  const onDrop = (file) => {
    if(file.length == 1) {
      setUploadedFile(file)
    } else {
      setMessage("You can only upload 1 video per post")
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}

    const requiredFields = ["title", "body", "course", "video"]

    requiredFields.forEach(field => {
      if(videoFields[field] === "") {
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
      submittedFields.append("title", videoFields.title)
      submittedFields.append("body", videoFields.body)
      submittedFields.append("public", videoFields.public)
      submittedFields.append("course", videoFields.course)
      submittedFields.append("video", uploadedFile[0])

      fetch(`/api/v1/personal_videos.json`, {
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
        if (body.personal_video.id) {
          setRedirectNumber(body.personal_video.id)
        } else {
          setErrors(body.errors)
          setVideoFields(body.fields)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))

      setVideoFields({
        title: "",
        body: "",
        public: false,
        course: ""
      })
    }
  }

  if (redirectNumber) {
    return <Redirect to={`/personal_videos/${redirectNumber}`} />
  }

  return(
    <div className="grid-container video-form">
      <div className="spacer"></div>
      <form onSubmit={handleSubmit}>
        <h2 className="form-header text-center">Personal Video</h2>
        <ErrorList
          errors={errors}
        />
        <label htmlFor="title">Title:
          <input
            type="text"
            id="title"
            value={videoFields.title}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="body">Description:
          <input
            type="text"
            id="body"
            value={videoFields.body}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="public">Public?
          <input
            type="checkbox"
            id="public"
            checked={videoFields.public}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="course">Where was this learned?:
          <select
            id="course"
            value={videoFields.course}
            onChange={handleInputChange}
          >
            {courseArray}
          </select>
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
          <input type="submit" className="submit-button cell small-4 small-offset-4" value="Post Video" />
        </div>
      </form>
    </div>
  )
}

export default VideoForm
