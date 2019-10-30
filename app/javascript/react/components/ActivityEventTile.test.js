import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ActivityEventTile from "./dashboard/ActivityEventTile"

describe("ActivityEventTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ActivityEventTile
          summary="Silks 2"
        />
      </BrowserRouter>
    )
  })

  it("renders the name of the calendar event", () => {
    expect(wrapper.find("#event-name").text()).toBe("You taught Silks 2. Post a summary")
  })
})
