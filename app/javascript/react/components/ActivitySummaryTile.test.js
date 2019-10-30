import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ActivitySummaryTile from "./dashboard/ActivitySummaryTile"

describe("ActivitySummaryTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ActivitySummaryTile
          title="Hip Key"
        />
      </BrowserRouter>
    )
  })

  it("renders the summary name", () => {
    expect(wrapper.find("#summary-name").text()).toBe("You posted the \"Hip Key\" summary")
  })
})
