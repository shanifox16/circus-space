import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import EventTile from "./dashboard/EventTile"

describe("EventTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <EventTile
          name="Silks 5"
          eventTime="5:00pm"
        />
      </BrowserRouter>
    )
  })

  it("renders the time information", () => {
    expect(wrapper.find("#event-time").text()).toBe("5:00pm")
  })

  it("renders the name information", () => {
    expect(wrapper.find("#event-name").text()).toBe("Silks 5")
  })
})
