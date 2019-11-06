import React, { useState } from 'react'
import _ from "lodash"

const SubscribeTile = props => {
  const [subscriberData, setSubscriberData] = useState({
    mailchimpAction: "",
    mailchimpId: "",
    status: "",
    fname: "",
    lname: "",
    email: ""
  })
  const [newSubscribers, setNewSubscribers] = useState([])

  let status = "Not Subscribed"
  let mailchimpId

  const setSubscribeState = event => {
    setSubscriberData({
      mailchimpAction: "post",
      status: "subscribed",
      fname: props.currentUser.fname,
      lname: props.currentUser.lname,
      email: props.currentUser.email,
    })
  }

  const setUnsubscribeState = event => {
    setSubscriberData({
      mailchimpAction: "patch",
      mailchimpId: mailchimpId,
      status: "unsubscribed",
      fname: props.currentUser.fname,
      lname: props.currentUser.lname,
      email: props.currentUser.email,
    })
  }

  const setResubscribeState = event => {
    setSubscriberData({
      mailchimpAction: "patch",
      mailchimpId: mailchimpId,
      status: "subscribed",
      fname: props.currentUser.fname,
      lname: props.currentUser.lname,
      email: props.currentUser.email,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch('/api/v1/subscribers', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(subscriberData),
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
      setNewSubscribers([body])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  let subscriberList
  if (newSubscribers[0]) {
    subscriberList = newSubscribers
  } else {
    subscriberList = props.subscribers
  }

  let button =
    <form onSubmit={handleSubmit}>
      <input className="subscribe-button" type="submit" value="Subscribe" onClick={setSubscribeState} />
    </form>

  subscriberList.forEach(subscriber => {
    if (subscriber.email_address === props.currentUser.email) {
      if (subscriber.status === "subscribed") {
        status = _.capitalize(subscriber.status)
        mailchimpId = subscriber.id
        button =
          <form onSubmit={handleSubmit}>
            <input className="subscribe-button" type="submit" value="Unsubscribe" onClick={setUnsubscribeState} />
          </form>
      } else {
        status = _.capitalize(subscriber.status)
        mailchimpId = subscriber.id
        button =
          <form onSubmit={handleSubmit}>
            <input className="subscribe-button" type="submit" value="Subscribe" onClick={setResubscribeState} />
          </form>
      }
    }
  })

  return(
    <div>
      <h6 className="header">Newsletter</h6>
      <p className="subscribe-text">Once weekly newsletter sent by your instructor</p>
      <h6 className="header">Status</h6>
      <p className="subscribe-text">{status}</p>
      {button}
    </div>
  )
}

export default SubscribeTile
