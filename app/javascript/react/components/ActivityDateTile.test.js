import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ActivityDateTile from "./dashboard/ActivityDateTile"

describe("ActivityDateTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ActivityDateTile
          date="2019-10-12"
        />
      </BrowserRouter>
    )
  })

  it("renders the date", () => {
    expect(wrapper.find("div").text()).toBe("2019-10-12")
  })
})
