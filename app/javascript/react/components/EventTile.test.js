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
          eventTime="10/19"
        />
      </BrowserRouter>
    )
  })

  it("renders the calendar information", () => {
    expect(wrapper.find("p").text()).toBe("Silks 5 at 10/19")
  })
})
