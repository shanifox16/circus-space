import React, { useState } from 'react'

const SubscribeTile = props => {
  const [subscriberData, setSubscriberData] = useState({
    mailchimpId: "",
    status: "",
    fname: "",
    lname: "",
    email: ""
  })

  let status = "Not Subscribed"
  let mailchimpId

  const setSubscribeState = event => {
    setSubscriberData({
      status: "subscribed",
      fname: props.currentUser.fname,
      lname: props.currentUser.lname,
      email: props.currentUser.email,
    })
  }

  const setUnsubscribeState = event => {
    setSubscriberData({
      mailchimpId: mailchimpId,
      status: "unsubscribed",
      fname: props.currentUser.fname,
      lname: props.currentUser.lname,
      email: props.currentUser.email,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addSubscriber(subscriberData)
  }

  let button =
    <form onSubmit={handleSubmit}>
      <input className="subscribe-button" type="submit" value="Subscribe" onClick={setSubscribeState} />
    </form>

  props.subscribers.forEach(subscriber => {
    if (subscriber.email_address === props.currentUser.email && subscriber.status === "subscribed") {
      status = subscriber.status
      mailchimpId = subscriber.id
      button =
        <form onSubmit={handleSubmit}>
          <input className="subscribe-button" type="submit" value="Unsubscribe" onClick={setUnsubscribeState} />
        </form>
    }
  })

  return(
    <div>
      <h5>Newsletter</h5>
      <p>Once weekly newsletter sent by your instructor</p>
      <h6>Status</h6>
      <p>{status}</p>
      {button}
    </div>
  )
}

export default SubscribeTile
