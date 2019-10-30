import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ActivitySubscriberTile from "./dashboard/ActivitySubscriberTile"

describe("ActivitySubscriberTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ActivitySubscriberTile
          fname="John"
          lname="Doe"
        />
      </BrowserRouter>
    )
  })

  it("renders the mailchimp subscriber name", () => {
    expect(wrapper.find("#subscriber-name").text()).toBe("John Doe subscribed to your newsletter")
  })
})
