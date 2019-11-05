import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from "lodash"
import ErrorList from "../ErrorList"

const CreateEventContainer = props => {
  const [eventFields, setEventFields] = useState({
    name: "",
    date: "",
    start: "",
    end: "",
    location: "",
    attendee: ""
  })

  const [errors, setErrors] = useState({})
  const [redirectStatus, setRedirectStatus] = useState(false)

  const handleInputChange = event => {
    setEventFields({
      ...eventFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}

    const requiredFields = ["name", "date", "start", "end", "location"]

    requiredFields.forEach(field => {
      if(eventFields[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmitHandler = event => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch('/api/v1/events', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(eventFields),
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
      if (body.summary) {
        setRedirectStatus(true)
      } else {
        setErrors(body.errors)
        setEventFields(body.fields)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

    setEventFields({
      name: "",
      date: "",
      start: "",
      end: "",
      location: "",
      attendee: ""
    })
    }
  }

  if (redirectStatus) {
    return <Redirect to="/" />
  }

  return(
    <div className="grid-container event-form">
    <div className="spacer"></div>
      <form onSubmit={handleSubmitHandler}>
      <h2>Add a Private Lesson</h2>
        <ErrorList
          errors={errors}
        />
        <label htmlFor="name">Name:
          <input
            type="text"
            id="name"
            value={eventFields.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="date">Date:
          <input
            type="date"
            id="date"
            value={eventFields.date}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="start">Start Time:
          <input
            type="time"
            id="start"
            value={eventFields.start}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="end">End Time:
          <input
            type="time"
            id="end"
            value={eventFields.end}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="location">Location:
          <input
            type="text"
            id="location"
            value={eventFields.location}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="attendee">Attendee's email:
          <input
            type="text"
            id="attendee"
            value={eventFields.attendee}
            onChange={handleInputChange}
          />
        </label>

        <div className="grid-x grid-margin-x">
          <input type="submit" class="submit-button cell small-4 small-offset-4" value="Create Event" />
        </div>
      </form>
    </div>
  )
}

export default CreateEventContainer
